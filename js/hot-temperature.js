// API_KEY
const apiKey = 'e3408a5b4f266319f2eb24a3f8163fcf';
// Load weather dada
const weatherDataLoad = async () => {
    // Location Search Field
    const searchField = document.getElementById('search-field');
    const cityName = searchField.value;
    // clear search field
    searchField.value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayCityWeather(data))
    
    // fetch by async await
    const res = await fetch(url);
    const data = await res.json();
    displayCityWeather(data);
}
// Display weather details
const displayCityWeather = city => {
    // get weather details div
    const cityWeatherDiv = document.getElementById('location-weather');
    cityWeatherDiv.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png" alt="">
        <h1>${city.name}</h1>
        <h3><span>${city.main.temp}</span>&deg;C</h3>
        <h1 class="lead">${city.weather[0].description}</h1>
    `;
}