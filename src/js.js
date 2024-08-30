import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});
