'use strict';

// eslint-disable-next-line no-unused-vars, no-undef
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  width: 280,

  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
      width: 340,
    },
  },
});

const link = document.getElementById('link');

if (window.screen.availWidth >= 1280) {
  link.href = '#gallery';
}
