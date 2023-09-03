'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  effect: 'slide',
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
