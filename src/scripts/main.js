'use strict';

const swiper = new Swiper('.swiper--mobile', {
  slidesPerView: 1,
  spaceBetween: 16,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

const swiper2 = new Swiper('.swiper--tablet', {
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

