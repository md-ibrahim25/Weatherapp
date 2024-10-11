const Apiurl = "https://api.weatherapi.com/v1/current.json?key=2ab17197f3ac49f6a3e70826241110&q="

const cityname = document.getElementById('cityname');
const searchBtn = document.getElementById('searchBtn');
const city = document.getElementById('city');
const temp_c = document.getElementById('temp_c');
const condition = document.getElementById('condition');
const Humid = document.getElementById('Humid');
const windSpeed = document.getElementById('windSpeed');

searchBtn.addEventListener('click', function (e) {
    // console.log(cityname.value);
    loadWeather(cityname.value);
});

const loadWeather = async(cityname)=>{
    // console.log(`${Apiurl}${city}`);
    const data = await fetch(`${Apiurl}${cityname}`)
    .then((res)=>res.json());
    city.innerHTML = `${data.location.name}`;
    temp_c.innerHTML = `${Math.round(data.current.temp_c)}°c`;
    condition.src = `${data.current.condition.icon}`;
    Humid.innerHTML = `${data.current.humidity}%`;
    windSpeed.innerHTML = `${data.current.wind_kph}km/h`

    
}