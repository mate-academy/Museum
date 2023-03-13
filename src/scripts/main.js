'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});

// eslint-disable-next-line
new Swiper('.slider__slider', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
