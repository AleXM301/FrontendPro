import {list, input} from './index.js'
export function renderObject(object) {
    if (object.title.trim()) {
        const li = document.createElement('li');
        li.innerHTML = `
                <div class="label-checkbox">
                    <label>
                        <input class="checkbox" type="checkbox" data-id="${object.id}">
                    </label>
                    <p > ${object.title}</p>
                </div>
                
                <button class="removeBtn" data-id="${object.id}">
                    
                </button>`;
        if (object.finished) {
            const inputCheck =  li.querySelector('.checkbox, [data-id = "${object.finished}"]');
            inputCheck.checked = true;
        }
        input.value = ''
        list.prepend(li);
    }

 }