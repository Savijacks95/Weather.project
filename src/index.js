let searchCity = document.querySelector("#search-form");
searchCity.addEventListener("submit", cityInput);

function cityInput(event) {
  event.preventDefault();
  let city = document.querySelector("#city").value;
  cityTemperature(city);
}
function cityTemperature(city) {
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}
navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function showTemperature(response) {
  let city = document.querySelector(".card-city");
  city.innerHTML = response.data.name;
  let temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(response.data.main.temp)}°`;
  let condition = document.querySelector(".weather-condition");
  condition.innerHTML = response.data.weather[0].main;
  let humidity = document.querySelector(".humidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector(".wind");
  wind.innerHTML = Math.round(response.data.wind.speed);

  celsiusTemp = response.data.main.temp;
}
let sanfran = document.querySelector("#SanFran");
sanfran.addEventListener("click", Francisco);
function Francisco() {
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${37.7749}&lon=${-122.4194}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let newyork = document.querySelector("#NewYork");
newyork.addEventListener("click", Diego);
function Diego() {
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${40.7128}&lon=${-74.006}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let losangeles = document.querySelector("#LosAngeles");
losangeles.addEventListener("click", Angeles);
function Angeles() {
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${34.0522}&lon=${-118.2437}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let dallas = document.querySelector("#Dallas");
dallas.addEventListener("click", Capital);
function Capital() {
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${32.779167}&lon=${-96.808891}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let now = new Date();
let date = document.querySelector(".date");

function formatDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentday = days[now.getDay()];
  let min = now.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  let hours = now.getHours();
  let today = `${currentday}, ${hours}:${min}`;
  return today;
}
date.innerHTML = formatDate(now);

let day = document.querySelector(".date");
let newDay = new Date();
day.innerHTML = weekdays(newDay);
function weekdays() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  return day;
}
let fahrenheitLink = document.querySelector(".fahrenheit");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector(".celsius");
celsiusLink.addEventListener("click", displayCelsiusTemp);

function displayFahrenheitTemp(event) {
  event.preventDefault();
  let temp = document.querySelector(".temp");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  temp.innerHTML = `${Math.round(fahrenheitTemp)}°`;
}

function displayCelsiusTemp(event) {
  event.preventDefault();
  let temp = document.querySelector(".temp");

  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  temp.innerHTML = `${Math.round(celsiusTemp)}°`;
}

let celsiusTemp = null;
