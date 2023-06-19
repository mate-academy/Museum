'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');

    document.querySelector('.page__mount').classList.add(
      'page__mount--active'
    );
  } else {
    document.body.classList.remove('page__body--with-menu');

    document.querySelector('.page__mount').classList.remove(
      'page__mount--active'
    );
  }
});

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    552: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  mousewheel: {
    invert: true,
  },
});
