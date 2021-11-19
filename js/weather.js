// const API_KEY = 'f2fc8bd6d5812d7bc76461c723e90176'
// const latLngUrl = 'api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'

const cityStateCodeUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Cheonan,KR&appid=f2fc8bd6d5812d7bc76461c723e90176&units=metric'


async function requestAPI() {
  const resp = await fetch(cityStateCodeUrl)
  const respData = await resp.json()
  const weather = document.querySelector('#weather .weather-temp img')
  const temp = document.querySelector('#weather .weather-temp span')
  const city = document.querySelector('#weather .city')

  const weatherText = respData.weather[0].main
  const weatherUrl = _chgTextImg(weatherText)

  weather.src = weatherUrl
  temp.innerHTML = ` ${respData.main.temp}&deg;`
  city.innerText = respData.name
}
requestAPI()

function _chgTextImg(text) {
  let imgUrl = ''
  if (text === 'Thunderstorm') {
    imgUrl = 'http://openweathermap.org/img/wn/11d@2x.png'
  } else if (text === 'Drizzle')
    imgUrl = 'http://openweathermap.org/img/wn/09d@2x.png'
  else if (text === 'Rain')
    imgUrl = 'http://openweathermap.org/img/wn/10d@2x.png'
  else if (text === 'Snow')
    imgUrl = 'http://openweathermap.org/img/wn/13d@2x.png'
  else if (text === 'Atmosphere')
    imgUrl = 'http://openweathermap.org/img/wn/50d@2x.png'
  else if (text === 'Clear')
    imgUrl = 'http://openweathermap.org/img/wn/01d@2x.png'
  else if (text === 'Clouds')
    imgUrl = 'http://openweathermap.org/img/wn/02d@2x.png'

  return imgUrl
}