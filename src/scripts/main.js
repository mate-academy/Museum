'use strict';

/* global Swiper */

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const swiper = new Swiper('.slider', {
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },

  slidesPerView: 1,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});

swiper.enable();
