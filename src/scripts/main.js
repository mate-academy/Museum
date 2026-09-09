'use strict';

const track = document.querySelector('.gallery__track');
const dots = document.querySelectorAll('.gallery__dot');

let currentSlide = 0;
let startX = 0;

function getSlidesToShow() {
  return window.innerWidth >= 640 ? 2 : 1;
}

function getSlideWidth() {
  return window.innerWidth >= 640 ? 360 : 300;
}

function updateSlider() {
  const slidesToShow = getSlidesToShow();
  const maxSlide = 5 - slidesToShow;

  currentSlide = Math.min(currentSlide, maxSlide);

  track.style.transform = `translateX(-${currentSlide * getSlideWidth()}px)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle('gallery__dot--active', index === currentSlide);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateSlider();
  });
});

track.addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX;
});

track.addEventListener('touchend', (event) => {
  const endX = event.changedTouches[0].clientX;
  const difference = startX - endX;

  if (Math.abs(difference) < 50) {
    return;
  }

  const maxSlide = 5 - getSlidesToShow();

  if (difference > 0 && currentSlide < maxSlide) {
    currentSlide++;
  }

  if (difference < 0 && currentSlide > 0) {
    currentSlide--;
  }

  updateSlider();
});

window.addEventListener('resize', updateSlider);

updateSlider();

const form = document.querySelector('.subscription__form');
const input = document.querySelector('.subscription__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  input.value = '';
});
