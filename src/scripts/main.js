'use strict';
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const navButtons = document.querySelectorAll('.carousel-nav button');
const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
});

function moveToSlide(track, currentSlide, targetSlide) {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
}

navButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const targetSlide = slides[index];

    moveToSlide(track, currentSlide, targetSlide);

    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  });
});

slides[0].classList.add('current-slide');
