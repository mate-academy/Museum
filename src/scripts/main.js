/* eslint-disable no-unused-vars */
'use strict';

// eslint-disable-next-line no-var, no-undef
const swiper = new Swiper('.mySwiper', {
  autoWidth: true,
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
