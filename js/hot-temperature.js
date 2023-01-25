// API_KEY
const apiKey = 'e3408a5b4f266319f2eb24a3f8163fcf';

const weatherDataLoad = () => {
    // Location Search Field
    const searchField = document.getElementById('search-field');
    const cityName = searchField.value;
    // clear search field
    searchField.value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCityWeather(data))
}

const displayCityWeather = city => {
    console.log(city);
}