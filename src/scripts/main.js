/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

const swiper = new Swiper('.gallery__swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  effect: 'slide',
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 16,

  pagination: {
    el: '.gallery__pagination',
    clickable: true,
  },
});
