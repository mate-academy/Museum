'use strict';

const IMAGE_WIDTH = 280;

const carousel = document.querySelector('.wrapper__carousel');

const backButton = document.querySelector('.wrapper__back');
const nextButton = document.querySelector('.wrapper__next');

const galleryButtons = document.querySelectorAll('.gallery__button-item');

const handleClick = (key, button) => {
  galleryButtons.forEach((element) => {
    element.classList.remove('gallery__button-item--active');
  });

  carousel.scrollLeft = key * IMAGE_WIDTH;

  button.classList.add('gallery__button-item--active');
};

galleryButtons.forEach((button, key) => {
  button.addEventListener('click', () => handleClick(key, button));
});

const handleBackClick = () => {
  carousel.scrollLeft -= IMAGE_WIDTH;
};

const handleNextClick = () => {
  carousel.scrollLeft += IMAGE_WIDTH;
};

backButton.addEventListener('click', handleBackClick);
nextButton.addEventListener('click', handleNextClick);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});
