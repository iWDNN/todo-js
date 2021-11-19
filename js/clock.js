const clock = todoContainer.querySelector('#clock')

function getTime() {
  const hours = String(new Date().getHours()).padStart(2, "0")
  const minutes = String(new Date().getMinutes()).padStart(2, "0")

  clock.innerText = `${hours}:${minutes}`
}

getTime()
setInterval(getTime, 1000)