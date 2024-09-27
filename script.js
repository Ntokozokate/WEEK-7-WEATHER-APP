function refreshWeather(response) {
  console.log(response.data.temperature.current);
  let currentTemp = document.querySelector("#temp");
  currentTemp.innerHTML = Math.round(response.data.temperature.current);
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = response.data.temperature.humidity;
  let currentWindSpeed = document.querySelector("#wind-speed");
  currentWindSpeed.innerHTML = Math.round(response.data.wind.speed);
  console.log(response.data.wind.speed);
}

function searchCity(city) {
  let apiKey = "3b1f6a3cf426c8fo47d42200c9911tba";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  //console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeather);
}

function searchWeather(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  //console.log(searchInput.value);
  let cityElement = document.querySelector("#city-output");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let seachFormElement = document.querySelector("#search-form");
seachFormElement.addEventListener("submit", searchWeather);
