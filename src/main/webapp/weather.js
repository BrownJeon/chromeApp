const COORDS = 'coords';

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(function(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coordsObj = {
            latitude,
            longitude
        }
        saveCoords(coordsObj);

    }, function(){
        console.log('can not access geo location');
    });
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        // get Weather
    }
}

function init() {
    loadCoords();
}

init();