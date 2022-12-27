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
  autoHeight: true,
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

document.querySelector('.subscribe__button').onclick = function(e) {
  document.querySelector('.subscribe__input').value = '';
};
