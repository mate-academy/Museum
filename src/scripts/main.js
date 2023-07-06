'use strict';
//  hamburger menu anumation

const icons = document.querySelectorAll('.nav-icon');
const links = document.querySelectorAll('.nav__link');

icons.forEach(icon => {
  icon.addEventListener('click', (event) => {
    for (const ic of icons) {
      ic.classList.toggle('open');
    }
  });
});

links.forEach(link => {
  link.addEventListener('click', (event) => {
    for (const ic of icons) {
      ic.classList.remove('open');
    }
  });
});

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const swiper = new Swiper('.swiper', {

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  breakpoints: {
    0: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
