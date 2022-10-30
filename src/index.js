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

function showTemperature(response) {
  let city = document.querySelector(".card-city");
  city.innerHTML = response.data.name;
  let temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(response.data.main.temp)}°`;
  let condition = document.querySelector(".weather-condition");
  condition.innerHTML = response.data.weather[0].main;
}
let sanfran = document.querySelector("#SanFran");
sanfran.addEventListener("click", Francisco);
function Francisco() {
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${37.7749}&lon=${-122.4194}&units=imperial&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let sandiego = document.querySelector("#SanDiego");
sandiego.addEventListener("click", Diego);
function Diego() {
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${32.715736}&lon=${-117.161087}&units=imperial&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let losangeles = document.querySelector("#LosAngeles");
losangeles.addEventListener("click", Angeles);
function Angeles() {
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${34.0522}&lon=${-118.2437}&units=imperial&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let sacramento = document.querySelector("#Sacramento");
sacramento.addEventListener("click", Capital);
function Capital() {
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${38.5816}&lon=${-121.4944}&units=imperial&appid=${apiKey}`;
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

let day = document.querySelector("#day");
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