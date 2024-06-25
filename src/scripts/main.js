'use strict';
var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  autoplay:{
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
});
