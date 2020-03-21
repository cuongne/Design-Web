const carouselSlide = document.querySelector('.slider-container');
const carouselImg = document.querySelectorAll('.slider-container img');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let counter = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

next.addEventListener('click', () => {
    if (counter >= carouselImg.length - 1) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prev.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


carouselSlide.addEventListener('transitionend', () => {
    if (carouselImg[counter].id === 'last') {
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImg[counter].id === 'first') {
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
setInterval(() => {
    next.click();
}, 6500);