'use strict';

// menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// form reload
const form = document.getElementById('form-reload');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});

// slider
const swiper = new Swiper('.slider', {
  loop: true,
  spaceBetween: 20,

  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },

  reakpoints: {
    320: {
      slidesPerView: 1,
    },
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});
