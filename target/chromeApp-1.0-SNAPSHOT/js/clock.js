const clock = document.querySelector(".js-clock .clock_text");

function setValue(time){
    return `${time < 10 ? `0${time}`:time}`;
}

function getTime() {
    const date = new Date();
    const min = setValue(date.getMinutes());
    const hour = setValue(date.getHours());
    const seconds = setValue(date.getSeconds());

    clock.innerHTML = `${hour}:${min}:${seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();