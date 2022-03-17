'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  };
});

const sliderItems = document.querySelectorAll('.slider__item');
const sliderControl = document.querySelectorAll('.slider__button');

function currentSlide(ind) {
  for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].classList.remove('slider__item--active');
  };

  for (let i = 0; i < sliderControl.length; i++) {
    sliderControl[i].classList.remove('slider__button--active');
  };

  sliderItems[ind].classList.add('slider__item--active');
  sliderControl[ind].classList.add('slider__button--active');
  sliderItems[ind + 1].classList.add('slider__item--active');
};

currentSlide(0);

for (let i = 0; i < sliderControl.length; i++) {
  sliderControl[i].addEventListener('click', () => {
    currentSlide(i);
  });
};
