const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"]


document.body.style.backgroundImage = `url('./img/${_timeMsg()}')`

function _timeMsg() {
  const hour = new Date().getHours()
  let imgUrl = ''
  if (hour >= 0 && hour <= 6)
    imgUrl = '3.jpeg'
  else if (hour > 6 && hour <= 12)
    imgUrl = '0.jpeg'
  else if (hour > 12 && hour <= 18)
    imgUrl = '1.jpeg'
  else if (hour > 18 && hour <= 24)
    imgUrl = '2.jpeg'

  return imgUrl
}