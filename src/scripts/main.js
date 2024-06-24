'use strict';

let startX;
let endX;

const slider = document.querySelector('.slider');

slider.addEventListener('touchstart', (e) => {
  startX = e.changedTouches[0].clientX;
  console.log(startX);
});

slider.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  if (startX - endX > 100) {
    const nextSlide = document.querySelector(
      'input[name="slide"]:checked',
    ).nextElementSibling;
    if (nextSlide) {
      nextSlide.checked = true;
    }
  } else if (startX - endX < -100) {
    const prevSlide = document.querySelector(
      'input[name="slide"]:checked',
    ).previousElementSibling;
    if (prevSlide) {
      prevSlide.checked = true;
    }
  }
}
