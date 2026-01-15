'use strict';

const gallerySwiper = new Swiper('.gallery-swiper', {
  slidesPerView: 1.3,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },

    768: {
      slidesPerView: 2.1,
      spaceBetween: 20,
    },
  },
});

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  e.target.reset();
});
