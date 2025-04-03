let imageIndex = 0
let imageArray = [`slider-1`, `slider-2`, `slider-3`];
const img = document.querySelector('.slide');

const prevBtn = document.querySelector(`#slider-btn-prev`);
const nextBtn = document.querySelector(`#slider-btn-next`);

const spanContainer = document.querySelector('.span-container');
const containerBtn = document.querySelector(`.button-container`);

generateSliderDots(imageArray);

containerBtn.addEventListener('click', (e) => {

    if (e.target.id === 'slider-btn-prev') {
        --imageIndex;
    }
    if (e.target.id === 'slider-btn-next') {
        ++imageIndex;
    }
    setImage(imageArray[imageIndex]);
    toggleSliderButtonState(imageIndex);
});

spanContainer.addEventListener('click', (e) => {

    for (let i = 0; i < imageArray.length; i++) {
        let imageName = imageArray[i];
        if (e.target.id === imageName) {
            imageIndex = i;
            setImage(imageName);
            toggleSliderButtonState(imageIndex);
        }
    }
})

function generateSliderDots(imageContainer) {
    for (const imageContainerElement of imageContainer) {
        spanContainer.innerHTML += `<span id=${imageContainerElement} class=\"span-item\"></span>`;
    }
}

function setImage(imageName) {
    img.src = `img/${imageName}.jpg`;
}

function toggleSliderButtonState(imageIndex) {
    nextBtn.classList.toggle('hidden', imageIndex === imageArray.length - 1);
    prevBtn.classList.toggle('hidden', imageIndex === 0);
}




