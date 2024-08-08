'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const sliderList = document.querySelector('.slider__list');
  const buttons = document.querySelectorAll('.slider__buttons-btn');
  const itemWidth = sliderList.querySelector('.slider__item').offsetWidth;

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      sliderList.style.transform = `translateX(-${index * itemWidth}px)`;

      buttons.forEach((btn) =>
        btn.classList.remove('slider__buttons-btn--active'));
      button.classList.add('slider__buttons-btn--active');
    });
  });
});
