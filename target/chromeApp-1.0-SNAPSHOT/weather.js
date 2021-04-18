const weather = document.querySelector(".js-weather");


const API_KEY = "cb5d1c4c3dbe915de9873691eb289273";
const COORDS = 'coords';

function getWeather(lat, lng) {
    // request
    // then : 데이터가 완전히 들어온 다음에 인자의 function호?
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        const temperature = json.main.temp;
        const place = json.name;

        weather.innerHTML = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coordsObj = {
            latitude,
            longitude
        }
        saveCoords(coordsObj);
        getWeather(latitude, longitude);

    }, function () {
        console.log('can not access geo location');
    });
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);

    console.log(loadedCoords);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        // get Weather
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();