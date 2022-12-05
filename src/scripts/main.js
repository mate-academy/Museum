'use strict';

// Initialize swiper for Galery section -->>

// eslint-disable-next-line no-unused-vars, no-undef
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

// Disable page refresh on form-submit -->>

const form = document.querySelector('.contact-form__form');
const inputs = document.querySelectorAll('.prevent-refresh');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);

// Disable scroll on menu-open -->>

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav-menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
