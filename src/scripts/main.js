/* eslint-disable no-undef */
'use strict';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  slidesPerView: 1.1,
  spaceBetween: 10,

  zoom: {
    maxRatio: 5,
  },

  breakpoints: {
    460: {
      slidesPerView: 2.1,
      spaceBetween: 10,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
  },
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
