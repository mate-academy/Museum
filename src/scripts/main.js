'use strict';
var imgSwiper = new Swiper('.slide-content',{
  slidesPerView: 1,
  spaceBetween: 15,
  grabCursor: true,
  slideToClickedSlide: true,
  loop: true,
  speed: 1000,
  autoplay: {
    deplay: 2000,
  },
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
      spaceBetween: 20,
    },
  }
});
