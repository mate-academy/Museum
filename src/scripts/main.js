/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    744: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
  },

  speed: 500,
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('html__body--with-menu');
  } else {
    document.body.classList.remove('html__body--with-menu');
  }
});

const formField = document.getElementById('non');

formField.addEventListener('submit', function(event) {
  event.preventDefault();
  formField.reset();
  window.scrollTo(0, 0);
});
