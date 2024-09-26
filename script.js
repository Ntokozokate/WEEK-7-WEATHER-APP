let searchFormElement = document.querySelector("#search-form");

function searchWeather(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  //console.log(searchInput.value);
  let cityElement = document.querySelector("#city-output");
  cityElement.innerHTML = searchInput.value;
}

searchFormElement.addEventListener("submit", searchWeather);
//call the API
//inject the Axios
//call the axios
//display the temperature
//
