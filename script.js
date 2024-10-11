const Apiurl =
  "https://api.weatherapi.com/v1/current.json?key=2ab17197f3ac49f6a3e70826241110&q=";

const cityname = document.getElementById("cityname");
const searchBtn = document.getElementById("searchBtn");
const city = document.getElementById("city");
const temp_c = document.getElementById("temp_c");
const condition = document.getElementById("condition");
const Humid = document.getElementById("Humid");
const windSpeed = document.getElementById("windSpeed");

searchBtn.addEventListener("click", function (e) {
  // console.log(cityname.value);
  loadWeather(cityname.value);
});

const loadWeather = async (cityname) => {
    try {
      const response = await fetch(`${Apiurl}${cityname}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      
      city.innerHTML = `${data.location.name}`;
      temp_c.innerHTML = `${Math.round(data.current.temp_c)}°c`;
      condition.src = `${data.current.condition.icon}`;
      Humid.innerHTML = `${data.current.humidity}%`;
      windSpeed.innerHTML = `${data.current.wind_kph}km/h`;
      document.querySelector(".main").style.display = "block";
      document.querySelector('.error').style.display = "none";
    
    } catch (error) {
      document.querySelector('.error').style.display = "block";
      document.querySelector('.main').style.display = "none";
      // Removed console.log(error) to avoid logging the error
    }
  };
  
