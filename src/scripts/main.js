'use strict';

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1040: {
      slidesPerView: 3,
    },
  },
});
