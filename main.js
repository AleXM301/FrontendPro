const div = document.querySelector('.btn_container');

div.addEventListener('click', (e) => {
    alert(`Ты нажал на ${e.target.id}`);
})