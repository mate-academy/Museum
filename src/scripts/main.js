'use strict';
const swiper = new Swiper('.gallery__slider', {
  slidesPerView: 1.1,
  spaceBetween: 20,
  pagination: {
    el: '.gallery__pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.99,
    },
  },
});
