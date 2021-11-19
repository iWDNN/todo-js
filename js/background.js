const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"]


document.body.style.backgroundImage = `url('./img/${_timeBg()}')`

function _timeBg() {
  const hour = new Date().getHours()
  let imgNum = ''
  if (hour >= 0 && hour <= 6)
    imgNum = '3.jpeg'
  else if (hour > 6 && hour <= 12)
    imgNum = '0.jpeg'
  else if (hour > 12 && hour <= 18)
    imgNum = '1.jpeg'
  else if (hour > 18 && hour <= 24)
    imgNum = '2.jpeg'

  return imgNum
}