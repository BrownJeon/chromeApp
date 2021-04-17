/* education 2.7

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
//    const hasClass = title.classList.contains(CLICKED_CLASS);
//    if (!hasClass){
//        title.classList.add(CLICKED_CLASS);
//    } else {
//        title.classList.remove(CLICKED_CLASS);
//    }
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}
init();
*/


/* education 2.6

const title = document.querySelector("#title");

const BASE_COLOR = "rgb(79, 92, 72)";
const OTHER_COLOR = "rgb(75, 104, 173)";

function init() {
    //title.style.color = BASE_COLOR;
}
init();

function handleClick() {
    const currentColor = title.style.color;

    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
        console.log('base color');
    } else {
        title.style.color = BASE_COLOR;
        console.log('other color');
    }
}

//title.addEventListener("click", handleClick);
title.addEventListener("mouseenter", handleClick);

window.addEventListener("offline", function () {
    console.log("bye");
});

window.addEventListener("online", function () {
    console.log('welcome back');
});
 */


/* education 2.4

const title = document.querySelector("#title");

title.addEventListener("click", function(){
    title.style.color = "red";
});
*/

/* education 2.3

const title = document.getElementById('title');
const title = document.querySelector("#title");
title.innerHTML = "change element text";
title.style.color="red";
document.title = "bang9";
console.dir(document);
*/

/* education 2.2

const title = document.getElementById('title');
title.innerHTML = "change element text";
console.log(title);
*/

/* education 2.1

const calculator = {
    plus: function (a, b){
        return a + b;
    },
    multiple: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    }
}

const plus = calculator.plus(5,5);
const multi = calculator.multiple(5,4);
const divide = calculator.divide(10,2);
console.log(`plus: ${plus} , multiple: ${multi} , divide: ${divide}`);
*/

/* education 2.0

function sayHello(str) {
    console.log(`hello! ${str}`);

    return `hello!`;

}

const greetHun = sayHello('hun');

console.log(greetHun);
*/