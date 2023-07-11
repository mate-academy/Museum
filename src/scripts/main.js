'use strict';

const swiper = new Swiper('.swiper', {

  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

document.getElementById("form").reset();
