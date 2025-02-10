'use strict';

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',

    clickable: true,
  },

  grabCursor: true,

  breakpoints: {
    498: {
      slidesPerView: 2.1,
      spaceBetween: 20,
    },

    0: {
      slidesPerView: 1.07,
      spaceBetween: 16,
    },
  },
});
