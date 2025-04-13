var todos = [];
var form = document.getElementById("todo-form");
var input = document.getElementById("todo-input");
var list = document.getElementById("todo-list");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    addTodo(input.value);
    input.value = "";
});
function addTodo(text) {
    var newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    todos.push(newTodo);
    renderTodos();
}
function renderTodos() {
    list.innerHTML = "";
    todos.forEach(function (todo) {
        var li = document.createElement("li");
        li.textContent = todo.text;
        if (todo.completed)
            li.classList.add("completed");
        li.addEventListener("click", function () {
            todo.completed = !todo.completed;
            renderTodos();
        });
        list.appendChild(li);
    });
}
