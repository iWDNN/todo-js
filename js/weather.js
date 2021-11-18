const API_KEY = 'f2fc8bd6d5812d7bc76461c723e90176'

const latLngUrl = 'api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
const cityStateCodeUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Cheonan,KR&appid=f2fc8bd6d5812d7bc76461c723e90176&units=metric'

async function requestAPI() {
  const resp = await fetch(cityStateCodeUrl)
  const respData = await resp.json()
  const weather = document.querySelector('#weather span:first-child')
  const city = document.querySelector('#weather span:last-child')

  weather.innerHTML = `${respData.main.temp}&deg; / ${respData.weather[0].main}`
  city.innerText = respData.name

}

requestAPI()



// function onGeoOk(position) {
//   const lat = position.coords.latitude
//   const lng = position.coords.longitude
//   console.log(lat, lng)
// }
// function onGeoError() {
//   alert('당신을 찾을수가 없습니다. 날씨는 없습니다.')
// }

// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

