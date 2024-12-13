'use strict';

let swiper = new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
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
