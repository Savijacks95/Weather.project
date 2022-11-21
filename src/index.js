let searchCity = document.querySelector("#search-form");
searchCity.addEventListener("submit", cityInput);

function cityInput(event) {
  event.preventDefault();
  let city = document.querySelector("#city").value;
  cityTemperature(city);
}
function cityTemperature(city) {
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}
navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function getForecast(coordinates) {
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayForecast);
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

  let icon = document.querySelector(".icon");
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  getForecast(response.data.coord);
}
let sanfran = document.querySelector("#SanFran");
sanfran.addEventListener("click", Francisco);
function Francisco() {
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${37.7749}&lon=${-122.4194}&units=imperial&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let newyork = document.querySelector("#NewYork");
newyork.addEventListener("click", Diego);
function Diego() {
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${40.7128}&lon=${-74.006}&units=imperial&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let losangeles = document.querySelector("#LosAngeles");
losangeles.addEventListener("click", Angeles);
function Angeles() {
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${34.0522}&lon=${-118.2437}&units=imperial&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let dallas = document.querySelector("#Dallas");
dallas.addEventListener("click", Capital);
function Capital() {
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${32.779167}&lon=${-96.808891}&units=imperial&appid=${apiKey}`;
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
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector(".forecast");

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `
      <div class="col-2">
        <div class="forecast-day">${formatDay(forecastDay.dt)}</div>
        <img
          src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
          alt=""
          width="62"
        />
        <div class="forecast-temp">
          <span class="high"> ${Math.round(forecastDay.temp.max)}° </span>
          <span class="low"> ${Math.round(forecastDay.temp.min)}° </span>
        </div>
      </div>
  `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}
