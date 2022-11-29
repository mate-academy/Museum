'use strict';

// eslint-disable-next-line no-unused-vars, no-undef
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
