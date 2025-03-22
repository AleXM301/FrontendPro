const colorBtn = document.querySelector('#btn');
const colorText = document.querySelector('#color_text');

colorBtn.addEventListener('click', () => {
    colorText.classList.toggle('color_text');
})