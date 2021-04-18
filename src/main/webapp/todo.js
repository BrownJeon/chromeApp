const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList")
;

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos() {
    // localStorage에 저장되는 모든 데이터는 String으로 저장해야함.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const newId = toDos.length + 1;

    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";

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