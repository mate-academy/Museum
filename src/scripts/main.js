/* eslint-disable no-undef */
'use strict';

document.addEventListener('DOMContentLoaded', function() {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.icon--menu');
  const closeButton = document.querySelector('.icon--close');
  const body = document.querySelector('body');

  menuButton.addEventListener('click', () => {
    body.classList.add('menu-open');
  });

  closeButton.addEventListener('click', () => {
    body.classList.remove('menu-open');
  });
});
