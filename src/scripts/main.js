'use strict';
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
