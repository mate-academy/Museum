'use strict';

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
  const isValid = form.checkValidity();

  if (isValid) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    input.value = '';
  }
});

const slider = document.querySelector('.main_content__gallery__slider');
const dots = document.querySelectorAll(
  '.main_content__gallery__slider_dots__dot',
);

slider.addEventListener('scroll', (e) => {
  const maxScroll = slider.scrollWidth - slider.clientWidth;
  const curActive = document.querySelector(
    '.main_content__gallery__slider_dots__dot--active',
  );

  curActive.classList.remove('main_content__gallery__slider_dots__dot--active');

  if (slider.scrollLeft < maxScroll / 4) {
    dots[0].classList.add('main_content__gallery__slider_dots__dot--active');
  } else if (slider.scrollLeft < (maxScroll / 4) * 2) {
    dots[1].classList.add('main_content__gallery__slider_dots__dot--active');
  } else if (slider.scrollLeft < (maxScroll / 4) * 3) {
    dots[2].classList.add('main_content__gallery__slider_dots__dot--active');
  } else {
    dots[3].classList.add('main_content__gallery__slider_dots__dot--active');
  }
});

const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.header__top-bar__burger-menu');

openMenu.addEventListener('click', () => {
  menu.classList.add('menu__active');
});

menu.addEventListener('click', () => {
  menu.classList.remove('menu__active');
});
