const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function setValue(time){
    return `${time < 10 ? `0${time}`:time}`;
}

function getTime() {
    const date = new Date();
    const min = setValue(date.getMinutes());
    const hour = setValue(date.getHours());
    const seconds = setValue(date.getSeconds());

    clockTitle.innerText = `${hour}:${min}:${seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();