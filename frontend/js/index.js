export const list = document.querySelector('.to_do_list');
export const input = document.querySelector('#to_do_input');
export const addBtn = document.querySelector('.addBtn');
const deleteBtn = document.querySelector('.removeBtn');

import {loadObjects, createObject, changeObject, deleteObject} from './api.js'
import {renderObject} from './ui.js';

async function deleteTodos (id){
    await deleteObject(id).catch( err => console.log(err));
    list.innerHTML = '';
    await  loadObjects().then(data => data.forEach((object) => renderObject(object)))
}
loadObjects()
    .then(data => {
        console.log(data);
        data.forEach((item) => renderObject(item))
        console.log('function-loadObject: ', data)
    })
    .catch(error => {
        console.log(error)
    });

addBtn.addEventListener('click', () => {

    createObject(input.value).then(data => {
        console.log(data);
        renderObject(data);
    }).catch(error => console.log(error))
})

list.addEventListener('click', (e) => {
    let id = e.target.dataset.id;

    if (e.target.classList.contains('checkbox')) {
        let finished = e.target.checked;
        console.log('Target check', finished);
        console.log('Target id', id);
        changeObject(finished, id).then();

    } else if (e.target.classList.contains('removeBtn')) {
        deleteTodos(id).catch( err => console.log(err))

    }
})







