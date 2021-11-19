const todoFormCt = todoContainer.querySelector('#todo-form')
const mainTodoCt = todoContainer.querySelector('#main-todo')
const todoCt = mainTodoCt.querySelector('#todo')

const todoInput = todoFormCt.querySelector('input')


const MAIN_TODO_KEY = 'mainTodo'

let mainTodo = {
  text: '',
  completed: '',
}

const mainTodoLS = JSON.parse(localStorage.getItem(MAIN_TODO_KEY))


if (mainTodoLS) {
  todoFormCt.classList.add(HIDDEN_CLASSNAME)
  _paintMaintodo(mainTodoLS)
} else {
  mainTodoCt.classList.add(HIDDEN_CLASSNAME)
}

todoFormCt.addEventListener('submit', e => {
  e.preventDefault()
  const value = todoInput.value
  gsap.to(todoFormCt, .2, {
    opacity: 0,
    display: 'none'
  });
  gsap.to(mainTodoCt, .2, {
    delay: .2,
    opacity: 1,
    display: 'flex'
  });
  todoInput.value = ''
  mainTodo.text = value
  mainTodo.completed = false
  _paintMaintodo(mainTodo)
})

function todoToLS(todo) {
  localStorage.setItem(MAIN_TODO_KEY, JSON.stringify(todo))
}

function _paintMaintodo(mainTodo) {
  const todoEl = document.createElement('div')
  todoEl.innerHTML = `
    <input id="cb1" type="checkbox">
    <label class="checkbox-css" for="cb1"></label>
    <label class="main-label" for="cb1">${mainTodo.text}</label>
    <button class="delete-btn">X</button>
  `
  const checkbox = todoEl.querySelector('#cb1')
  const compBtn1 = todoEl.querySelector('.checkbox-css')
  const compBtn2 = todoEl.querySelector('.main-label')
  const deleteBtn = todoEl.querySelector('.delete-btn')

  if (mainTodo.completed === true) {
    compBtn2.classList.add('completed')
    checkbox.checked = true
  }
  else {
    compBtn2.classList.remove('completed')
    checkbox.checked = false
  }

  deleteBtn.addEventListener('click', () => {
    todoEl.remove()
    localStorage.setItem(MAIN_TODO_KEY, null)
    gsap.to(mainTodoCt, .3, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(todoFormCt, .3, {
      delay: .3,
      opacity: 1,
      display: 'flex'
    });
  })
  todoToLS(mainTodo)
  todoCt.appendChild(todoEl)

  compBtn1.addEventListener('click', () => {
    compBtn2.classList.toggle('completed')
    _checkcmp(compBtn2)
  })
  compBtn2.addEventListener('click', () => {
    compBtn2.classList.toggle('completed')
    _checkcmp(compBtn2)
  })
}

function _checkcmp(label) {
  if (label.classList.contains('completed')) {
    mainTodo.text = label.innerText
    mainTodo.completed = true

    todoToLS(mainTodo)
  } else {
    mainTodo.text = label.innerText
    mainTodo.completed = false
    todoToLS(mainTodo)
  }
}

