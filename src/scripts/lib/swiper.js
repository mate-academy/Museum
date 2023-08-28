'use strict';

/* eslint-disable */
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      enabled: false,
    },
  },
});
