'use strict';

const form = document.querySelector('.follow__form');
const inputs = document.querySelectorAll('.follow__form--input');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  inputs.forEach(function(elem) {
    elem.value = '';
  });
});

// eslint-disable-next-line no-unused-vars, no-undef
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
  },
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body-with--menu');
  } else {
    document.body.classList.remove('page__body-with--menu');
  }
});
