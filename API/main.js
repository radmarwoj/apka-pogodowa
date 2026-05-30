// TODO: Pobierz wszystkie potrzebne elementy html i
// przypisz je do zmiennych
const cityName = document.querySelector('p.city_name');
const input = document.querySelector('input');
const date = document.querySelector('p.date');
const temp = document.querySelector('p.temp');
const description = document.querySelector('p.description');
const feelsLike = document.querySelector('p.feels_like');
const windSpeed = document.querySelector('p.windspeed');
const pressure = document.querySelector('p.pressure');
const humidity = document.querySelector('p.humidity');
const visibility = document.querySelector('p.visibility');
const clouds = document.querySelector('p.clouds');
const rain = document.querySelector('p.rain');
const errorMsg = document.querySelector('p.error-message');

const apiInfo = {
    link : "https://api.openweathermap.org/data/2.5/weather?q=",
    key : "&appid=8eb4145d235e27ff9c3dc4db24807e26",
    units: "&units=metric",
    lang : "&lang=pl"
};

function getWeather (){
    const apiCity = input.value.toLowerCase().trim()
    const URL = `${apiInfo.link}${apiCity}${apiInfo.key}${apiInfo.units}${apiInfo.lang}`;
    console.log(URL);
}

function getWeatherByEnter (e){
    if (e.key === 'Enter') {
        getWeather();
    }
}
input.addEventListener('keypress', getWeatherByEnter);

console.log("TEST JS DZIAŁA");
console.log("KLUCZ:", apiInfo.key);