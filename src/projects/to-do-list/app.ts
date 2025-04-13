interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const todos: Todo[] = [];

const form = document.getElementById("todo-form") as HTMLFormElement;
const input = document.getElementById("todo-input") as HTMLInputElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo(input.value);
    input.value = "";
});

function addTodo(text: string) {
    const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false
    };
    todos.push(newTodo);
    renderTodos();
}

function renderTodos() {
    list.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.text;
        if (todo.completed) li.classList.add("completed");
        li.addEventListener("click", () => {
            todo.completed = !todo.completed;
            renderTodos();
        });
        list.appendChild(li);
    });
}
