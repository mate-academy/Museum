/* global Swiper */
'use strict';

const swiper = new Swiper('.slider', {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      allowTouchMove: true,
    },

    1280: {
      slidesPerView: 2,
      allowTouchMove: false,
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

const body = document.body;

function checkMenu() {
  if (window.location.hash === '#menu') {
    body.classList.add('body--no-scroll');
  } else {
    body.classList.remove('body--no-scroll');
  }
}

window.addEventListener('hashchange', checkMenu);
window.addEventListener('load', checkMenu);
