const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = 'todos'

let toDos = []

function _saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function _cmpCheck(li) {
  if (li.classList.contains('completed')) {
    toDos.forEach(todo => {
      if (todo.id == li.id)
        todo.completed = true
    })
  } else {
    toDos.forEach(todo => {
      if (todo.id == li.id)
        todo.completed = false
    })
  }
  _saveToDos()
}

function _paintToDo(newTodo) {
  const li = document.createElement('li')
  li.id = newTodo.id
  li.innerHTML = `
    <input id="completed" type="checkbox"/>
    <label id="labelCheckbox" for="completed"></label>
    <label class="todo-text"for="completed">${newTodo.text}</label>
    <button class="deleteBtn">
      X
    </button>
  `
  if (newTodo.completed) {
    li.classList.add('completed')
  } else
    li.classList.remove('completed')

  const compBtn = li.querySelector("#labelCheckbox")
  compBtn.addEventListener('click', () => {
    li.classList.toggle('completed')
    _cmpCheck(li)
  })
  const textLabel = li.querySelector(".todo-text")
  textLabel.addEventListener('click', () => {
    li.classList.toggle('completed')
    _cmpCheck(li)
  })
  const delBtn = li.querySelector('.deleteBtn')
  delBtn.addEventListener('click', e => {
    const li = e.target.parentElement
    li.remove()
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id))
    _saveToDos()
  })

  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value
  toDoInput.value = ''
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    completed: false
  }
  toDos.push(newTodoObj)
  _paintToDo(newTodoObj)
  _saveToDos()
}

toDoForm.addEventListener('submit', handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos)
  toDos = parsedToDos
  toDos.forEach(_paintToDo) // todo => { paintToDo(todo)}
}