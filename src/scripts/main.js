'use strict';

/* eslint-disable no-undef */
/* eslint-disable no-new */
new Swiper('.slider__container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // grabCursor: true,
  autoheight: true,
  slidesPerView: 1,
  loop: true,
  keybord: {
    enabled: true,
    onlyInViewport: true,
  },

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
