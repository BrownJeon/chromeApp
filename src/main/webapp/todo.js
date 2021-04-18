const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList")
;

const TODOS_LS = 'toDos';

function filterFn(toDo) {
    return toDo.id === 1;
}

let toDos = [];

function deleteTodo(event) {
    const btn =event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);

    // * toDos 배열의 데이터를 모두 돌면서 인자의 function을 실행하여 true인 값을 반환
    toDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });

    saveToDos();
}

function saveToDos() {
    // localStorage에 저장되는 모든 데이터는 String으로 저장해야함.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const newId = toDos.length + 1;

    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteTodo);

    const span = document.createElement("span");
    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;

    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    }

    toDos.push(toDoObj);
    saveToDos();
}

function loadTodos() {
    const loadToDos = localStorage.getItem(TODOS_LS);
    if (loadToDos !== null) {
        // localStorage에서 가져온 데이터는 String이기 때문에 다시 JSON으로 변경해줘야함
        const parsedTodos = JSON.parse(loadToDos);

        // * parsedTodos 배열의 데이터를 모두 돌면서 인자의 function을 실행
        parsedTodos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

function init() {
    loadTodos();
    toDoForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value = "";
    })
}

init();