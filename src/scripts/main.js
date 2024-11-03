'use strict';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    920: {
      slidesPerView: 3,
    },
  },
  spaceBetween: 30,
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
