// const UNSPLASH_API_KEY = "b491e86a6957b396f44f1e15e41d3d242e17aa982607f161b95defd195c7f4dd";
const UNSPLASH_API_KEY = "KkY4-qhq6K38IUIuxMO2WeZyn9f2nix6F8bK2mIlCpk";
const UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&query=landscape&orientation=landscape`;

const body = document.querySelector("body"),
    locationContainer = document.querySelector(".js-location span");

function loadBackground() {
    const saveImage = localStorage.getItem("background");
    if (saveImage === null) {
        // 배경화면 가져오기
        getBackground();
    } else {
        // 배경화면 설정
        const parsedImage = JSON.parse(saveImage);
        const today = new Date();
        if (today > parsedImage.expiresOn) {
            getBackground();
        } else {
            body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${
                parsedImage.url
            })`;
            locationContainer.innerHTML = `${parsedImage.country} [ ${parsedImage.city} ]`;
        }
    }
}

function getBackground() {
    fetch(UNSPLASH_URL)
        .then(response => response.json())
        .then(json => {
            const image = json;
            if (image.urls && image.urls.full && image.location) {
                const fullUrl = image.urls.full;
                const location = image.location;
                const city = location.city;
                const country = location.country;
                const name = location.name;
                saveBackground(fullUrl, city, country, name);
            } else {
                getBackground();
            }
        });
}

function saveBackground(imageUrl, city, country, name) {
    const saveImage = localStorage.getItem("background");
    if (saveImage !== null) {
        localStorage.removeItem("background");
    }
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);

    const imageObj = {
        url: imageUrl,
        expiresOn: expirationDate,
        city,
        country,
        name
    };
    localStorage.setItem("background", JSON.stringify(imageObj));
    loadBackground();
}

function initBackground() {
    loadBackground();
}

initBackground();