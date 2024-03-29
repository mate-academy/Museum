'use strict';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // centeredSlides: true,
  spaceBetween: 20,
  slidesPerView: 'auto',
  effect: 'slide',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
