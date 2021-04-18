const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");


const USER_LS = "username",
    SHOWING_CN = "showing"
;

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", function (event) {
        // event의 기본 동작을 막는 메서드
        event.preventDefault();
        const currentValue = input.value;

        paintGreeting(currentValue);
        saveName(currentValue);
    });
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
    const username = localStorage.getItem(USER_LS);
    if (username === null) {
        askForName();
    } else {
        paintGreeting(username);
    }
}

function initGreeting(){
    loadName();
}

initGreeting();
