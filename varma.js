const sliderContainer = document.querySelector('.slider-container');
let index = 0;

function showNextImage() {
    index++;
    if (index >= sliderContainer.children.length) {
        index = 0;
    }
    sliderContainer.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(showNextImage, 3000); // Change image every 3 seconds