const input = document.querySelector('.js--form__input');
const formBtn = document.querySelector('.form__btn');
const todosWrapper = document.querySelector('.js--todos-wrapper');

document.addEventListener("DOMContentLoaded", (event) => {
    let newVar = JSON.parse(localStorage.getItem("tasks") || "[]");
    newVar.forEach(item => renderList(item));
});


function renderList(item) {
    const li = document.createElement('li');
    li.classList.add("todo-item");
    li.innerHTML =
        `<input type="checkbox">
         <span class="todo-item__description">${item.value}</span>
         <button class="todo-item__delete" data-id="${item.id}">Видалити</button>`;
    todosWrapper.appendChild(li);
}

formBtn.addEventListener('click', (e) => {

    e.preventDefault();
    let valInput = input.value.trim();
    if (!valInput) {
        alert("input is required");
        return;
    }

    let item = {
        id: Math.random(),
        valInput
    };

    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(item);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderList(item);

    input.value = '';
});

todosWrapper.addEventListener("click", e => {

    if (e.target.classList.contains(`todo-item__delete`)) {

        const id = +e.target.dataset.id;
        let list = JSON.parse(localStorage.getItem("tasks") || "[]");

        let removeItem = list.filter(e => e.id !== id);
        localStorage.setItem("tasks", JSON.stringify(removeItem));

        todosWrapper.innerHTML = "";
        removeItem.forEach(item => renderList(item));
    }
});



