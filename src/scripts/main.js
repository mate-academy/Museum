'use strict';

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1.06755,
      spaceBetween: 16,
    },

    768: {
      slidesPerView: 2.0805,
      spaceBetween: 20,
    },
  },
});
