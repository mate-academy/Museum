import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slideToClickedSlide: true,
  autoHeight: false,

  breakpoints: {
    0: {
      spaceBetween: 16,
      slidesPerView: '1.07',
    },

    767: {
      spaceBetween: 20,
      slidesPerView: '2.1',
    },
  },
});

let html = document.querySelector('html');
document.querySelector('.menu__link').onclick = function () {
  html.classList.toggle('unscroll');
};
document.querySelector('.icon-button-close').onclick = function () {
  html.classList.remove('unscroll');
};
document.querySelector('.aside_block_1').onclick = function () {
  html.classList.remove('unscroll');
};
