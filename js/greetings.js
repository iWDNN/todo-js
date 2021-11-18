const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const clockInGreetings = document.querySelector("h2#clock")
const toDoFormInGreetings = document.getElementById("todo-form")
const quotesInGreetings = document.getElementById("quote")
const weatherInGreetings = document.getElementById("weather")


const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

//loginform - document

function onLoginSubmit(event) {
  event.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)
  localStorage.setItem(USERNAME_KEY, loginInput.value)
  _paintGreetings(loginInput.value)
}

function _paintGreetings(username) {
  greeting.innerHTML = `<span class="msg">안녕하세요,</span> ${username}<span class="msg"> 님</span>`
  greeting.classList.remove(HIDDEN_CLASSNAME)
  loginForm.classList.add(HIDDEN_CLASSNAME)
  _removeWithoutLoginForm()
}

loginForm.addEventListener('submit', onLoginSubmit)

// loginform - localStorage
const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  _addWithoutLoginForm()
} else {
  _paintGreetings(savedUsername)
}




function _addWithoutLoginForm() {
  toDoFormInGreetings.classList.add(HIDDEN_CLASSNAME)
  clockInGreetings.classList.add(HIDDEN_CLASSNAME)
  quotesInGreetings.classList.add(HIDDEN_CLASSNAME)
  weatherInGreetings.classList.add(HIDDEN_CLASSNAME)
}
function _removeWithoutLoginForm() {
  toDoFormInGreetings.classList.remove(HIDDEN_CLASSNAME)
  clockInGreetings.classList.remove(HIDDEN_CLASSNAME)
  quotesInGreetings.classList.remove(HIDDEN_CLASSNAME)
  weatherInGreetings.classList.remove(HIDDEN_CLASSNAME)
}