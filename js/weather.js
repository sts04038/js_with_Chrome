const API_KEY = '00433311ffec174980d97c01d1046add';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log('You live in', lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');
            weather.innerText = data.weather[0].main;
            city.innerText = `${data.main.temp}, ${data.name}`;
        });
}

function onGeoError() {
    console.log("Sorry, we can't find you 😞");
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
