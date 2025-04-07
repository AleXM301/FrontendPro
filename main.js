const input = document.querySelector('.js--form__input');
const formBtn = document.querySelector('.form__btn');
const todosWrapper = document.querySelector('.js--todos-wrapper');

document.addEventListener("DOMContentLoaded", (event) => {
    let tasks = getTasks();
    tasks.forEach(item => addTask(item));
});

function getTasks() {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(item) {
    const li = document.createElement('li');
    li.classList.add("todo-item");
    li.innerHTML =
        `<input class="checkbox" type="checkbox" data-id="${item.id}" ${item.checked ? "checked" : ""} >
         <span class="todo-item__description">${item.value}</span>
         <button class="todo-item__delete" data-id="${item.id}">Видалити</button>`;
    todosWrapper.appendChild(li);
}

formBtn.addEventListener('click', (e) => {

    e.preventDefault();
    let value = input.value.trim();
    if (!value) {
        alert("input is required");
        return;
    }

    let item = {
        id: Math.random(),
        value,
        checked: false
    }

    let tasks = getTasks();
    tasks.push(item);

    saveTasks(tasks);
    addTask(item);

    input.value = '';
});

todosWrapper.addEventListener("click", e => {

    let tasks = getTasks();
    if (e.target.classList.contains(`todo-item__delete`)) {

        const id = +e.target.dataset.id;
        let filteredTask = tasks.filter(e => e.id !== id);
        saveTasks(filteredTask)

        e.target.closest('li').remove();

    } else if (e.target.classList.contains("checkbox")) {
        const id = +e.target.dataset.id;
        let item = tasks.find(e => e.id === id);
        item.checked = !item.checked;
        saveTasks(tasks);
    }
});




