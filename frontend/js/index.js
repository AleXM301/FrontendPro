export const list = document.querySelector('.todo_list');
export const input = document.querySelector('#todo_input');
export const addBtn = document.querySelector('.addBtn');

import {getTodos, createTodo, changeTodo, deleteTodo} from './api.js'
import {renderTodo} from './ui.js';

async function loadTodo() {
   try {
       const todos = await getTodos();
       return todos.forEach(todo => renderTodo(todo));
   }
   catch (error) {
       console.error(error);
   }
}
addBtn.addEventListener('click', async () => {
    if (input.value.trim()) {
        let newTodo = await createTodo(input.value);
        renderTodo(newTodo);
        input.value = '';

    }
});

list.addEventListener('click', async (e) => {

    let id = e.target.dataset.id;
    if (e.target.classList.contains('checkbox')){

        const container = e.target.closest('.label-checkbox');
        const title = container.querySelector('label').textContent;
        let finished = e.target.checked;
        await changeTodo(id, title, finished);

    } else if (e.target.closest('.removeBtn')) {
        const btn = e.target.closest('.removeBtn');
        const btnID = btn.dataset.id;
        await deleteTodo(btnID);
        btn.closest('li').remove();
    }
});
loadTodo();