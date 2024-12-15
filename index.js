
let todos = [];

// Додати нове завдання
function newTodo() {
    const text = prompt("Введіть нове завдання:");
    if (text) {
        const todo = {
            id: Date.now(),
            text: text,
            done: false,
        };
        todos.push(todo);
        render();
        updateCounter();
    }
}

// Створити HTML для одного завдання
function renderTodo(todo) {
    return `
        <li>
            <input type="checkbox" id="${todo.id}" ${todo.done ? "checked" : ""} onclick="checkTodo(${todo.id})">
            <label for="${todo.id}">${todo.text}</label>
            <button onclick="deleteTodo(${todo.id})">Видалити</button>
        </li>
    `;
}

// Оновити список завдань
function render() {
    const list = document.getElementById("todo-list");
    list.innerHTML = todos.map(renderTodo).join("");
}

// Оновити лічильники
function updateCounter() {
    const total = todos.length;
    const remaining = todos.filter(todo => !todo.done).length;
    document.getElementById("total-counter").textContent = `Всього: ${total}`;
    document.getElementById("remaining-counter").textContent = `Невиконано: ${remaining}`;
}

// Видалити завдання
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    render();
    updateCounter();
}

// Позначити завдання як виконане/невиконане
function checkTodo(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.done = !todo.done;
        render();
        updateCounter();
    }
}
