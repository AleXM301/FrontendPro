const list = document.querySelector('.to_do_list');
const input = document.querySelector('#to_do_input');
const addBtn = document.querySelector('#addBtn');


list.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target.closest('button')) {
        e.target.parentElement.parentElement.remove();
    }
});

addBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    if (input.value.trim()) {
        li.innerHTML = `<label class="label-checkbox">
                        <input class="checkbox" type="checkbox">
                        <span class="span-checked"></span>
                        <p> ${input.value.trim()} </p>
                    </label>
                    <button id="removeBtn">
                        <img src="svg/delete.svg" alt="delete icon">
                    </button>`
        input.value = '';
        list.appendChild(li);
    }
});

