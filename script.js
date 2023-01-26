// https://weather-app.asprogram.repl.co/index.html

const getWeather = (city) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9058b78f73mshe78df9b7b53688ep148f69jsnf12e9e363ad7',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(value => value.json())
    .then((value) => { cloud_pct.innerHTML = value.cloud_pct, feels_like.innerHTML = value.feels_like, humidity.innerHTML = value.humidity, max_temp.innerHTML = value.max_temp, min_temp.innerHTML = value.min_temp, sunrise.innerHTML = value.sunrise, sunset.innerHTML = value.sunset, temp.innerHTML = value.temp, wind_degrees.innerHTML = value.wind_degrees, wind_speed.innerHTML = value.wind_speed, console.log(value) })
   
}


getWeather("mumbai")
let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
btn.addEventListener("click", function(e) {
  e.preventDefault();
  getWeather(inp.value);
  city.innerHTML = inp.value;
})
