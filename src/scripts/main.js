'use strict';

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.gallery__slider', {
  modules: [Pagination],
  speed: 300,
  slidesPerView: 1,
  spaceBetween: 16,
  slidesOffsetBefore: 20,
  slidesOffsetAfter: 20,
  grabCursor: true,
  pagination: {
    el: '.gallery__pagination',
    clickable: true,
  },
  enabled: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesOffsetBefore: 34,
      slidesOffsetAfter: 34,
      enabled: true,
    },
    1280: {
      enabled: false,
    },
  },
});
