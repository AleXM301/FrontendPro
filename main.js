const img = document.querySelector('img');
const btn = document.querySelector('#random_btn');


function random() {
    return Math.floor(Math.random() * (11 - 1) + 1);
}

btn.addEventListener('click', () =>
    img.src = `img/${random()}.jpg`
);