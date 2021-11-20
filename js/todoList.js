const todoListCt = document.querySelector('#todo-list-container')

const todoModal = todoListCt.querySelector('#todo-modal')

const todoListForm = todoModal.querySelector('#todo-list-form')
const todoListInput = todoModal.querySelector('#todo-list-form input')

const todoList = todoModal.querySelector('#todo-list')

const todoListBtn = todoListCt.querySelector('#todo-list-btn')

const TODOS_KEY = 'todos'

const todosLS = JSON.parse(localStorage.getItem(TODOS_KEY))

if (todosLS) {
  todosLS.forEach(todo => {
    _paintTodoList(todo)
  })
}


todoListForm.addEventListener('submit', e => {
  e.preventDefault()
  const value = {
    text: todoListInput.value,
    completed: false
  }
  todoListInput.value = ''
  _paintTodoList(value)
  updateLS()
})

function _paintTodoList(todo) {
  const li = document.createElement('li')
  li.innerHTML = `
    <input id="cb1" type="checkbox">
    <label class="checkbox-css" for="cb1"></label>
    <label class="main-label" for="cb1">${todo.text}</label>
    <button class="delete-btn">X</button>
  `
  const checkbox = li.querySelector('#cb1')
  const compBtn1 = li.querySelector('.checkbox-css')
  const compBtn2 = li.querySelector('.main-label')
  const deleteBtn = li.querySelector('.delete-btn')

  if (todo.completed) {
    compBtn2.classList.add('completed')
    checkbox.checked = true
  } else {
    compBtn2.classList.remove('completed')
    checkbox.checked = false
  }
  todoList.appendChild(li)

  deleteBtn.addEventListener('click', () => {
    li.remove()
    updateLS()
  })
  compBtn1.addEventListener('click', () => {
    compBtn2.classList.toggle('completed')
    checkbox.checked = !checkbox.checked
    updateLS()
  })
  compBtn2.addEventListener('click', () => {
    compBtn2.classList.toggle('completed')
    checkbox.checked = !checkbox.checked
    updateLS()
  })
}

function updateLS() {
  let todos = []
  const todosEl = todoList.querySelectorAll('li')
  todosEl.forEach(todo => {
    const mainLabel = todo.querySelector('.main-label')
    todos.push({
      text: mainLabel.innerText,
      completed: mainLabel.classList.contains('completed')
    })
  });
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}





todoListBtn.addEventListener('click', () => {
  console.dir(todoModal)
  todoListBtn.classList.toggle('active')
  if (todoListBtn.classList.contains('active')) {
    gsap.to(todoModal, .9, {
      display: 'flex',
      x: 0
    })
  } else {
    gsap.to(todoModal, .9, {
      x: todoModal.offsetWidth,
    })
  }
})