const container = document.querySelector('.container');

let urlContainer = "";

container.addEventListener('click', event => {
    if (event.target.id === 'search-btn') {
        location.assign(`${urlContainer}`);
    } else if (event.target.id === 'input-btn') {
        urlContainer = prompt(`Введите URL`);
    }
})