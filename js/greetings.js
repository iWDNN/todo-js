const loginForm = document.getElementById('login-form')
const nameQuestion = loginForm.querySelector('h3')
const nameInput = loginForm.querySelector('input')

const todoContainer = document.querySelector('.todo-container')
const greeting = todoContainer.querySelector('#greeting')

const HIDDEN_CLASSNAME = 'hidden'
const NAME_KEY = 'name'

const nameLS = localStorage.getItem(NAME_KEY)
if (nameLS) {
  loginForm.classList.add(HIDDEN_CLASSNAME)
  _paintName(nameLS)
  gsap.to(todoContainer, 1, {
    opacity: 1,
    display: 'flex'
  });
}

function _paintName(name) {
  greeting.innerText = _timeMsg(name)
}

loginForm.addEventListener('submit', e => {
  e.preventDefault()
  gsap.to(loginForm, .6, {
    opacity: 0,
    display: 'none'
  });
  gsap.to(todoContainer, .6, {
    delay: .6,
    opacity: 1,
    display: 'flex'
  });
  const name = nameInput.value
  _paintName(name)
  nameInput.value = ''
  _nameToLS(name)
})

function _nameToLS(name) {
  localStorage.setItem(NAME_KEY, name)
}
function _timeMsg(name) {
  const hour = new Date().getHours()
  let msg = ''
  if (hour >= 0 && hour <= 6)
    msg = `편안한 새벽 되세요, ${name}`
  else if (hour > 6 && hour <= 12)
    msg = `좋은 아침 입니다, ${name}`
  else if (hour > 12 && hour <= 18)
    msg = `나른한 오후 힘내세요, ${name}`
  else if (hour > 18 && hour <= 24)
    msg = `편안한 저녁 되세요, ${name}`

  return msg
}