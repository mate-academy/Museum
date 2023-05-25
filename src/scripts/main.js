'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu-opener');

    document.querySelector('.menu__background').classList.add(
      'menu__background-is--active'
    );
  } else {
    document.body.classList.remove('page__body--menu-opener');

    document.querySelector('.menu__background').classList.remove(
      'menu__background-is--active'
    );
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});

/* global Swiper */

const swiper = new Swiper('.slider', {
  loop: true,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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

swiper.enable();
