function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = config.weatherApiKey;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#weather-info");
    temp = Math.round(data.main.temp * 10) / 10;
    weather.innerText = `${temp}°C`;

    const city = document.querySelector("#city");
    city.innerText = data.name;

    const icon = document.querySelector("#weather-icon");
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);