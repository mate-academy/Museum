/* eslint-disable */
'use strict';

const e = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: !0,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});
