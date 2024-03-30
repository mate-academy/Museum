'use strict';

const button = document.querySelectorAll('.gallery__slider__link');

button.addEventListener('click', () => {
  if (button.classList.contains('gallery__slider__link--active')) {
    button.classList.remove('gallery__slider__link--active');
  } else {
    button.classList.add('gallery__slider__link--active')
  }
});
