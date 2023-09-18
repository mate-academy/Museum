'use strict';

const form = document.querySelector('#contacts-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

/* eslint-disable no-unused-vars */
const swiper = new Swiper('.galery__slider', { // eslint-disable-line
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
/* eslint-enable no-unused-vars */
