'use strict';

/* global Swiper */

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form-reload');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});

const swiper = new Swiper('.slider', {
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },

  breakpoint1: {
    320: {
      slidesPerView: 1,
    },
  },

  breakpoint2: {
    768: {
      slidesPerView: 2,
    },
  },
});

swiper.enable();
