'use strict';

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  // loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      // loop: false,
      grid: {
        rows: 2,
        fill: 'row',
      },

      spaceBetween: 30,
    },
  },
});
