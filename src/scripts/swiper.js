import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import '../../node_modules/swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  slidesPerView: 1.08,
  spaceBetween: 16,
  loop: false,
  breakpoints: {
    640: {
      slidesPerView: 2.08,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


export default swiper;