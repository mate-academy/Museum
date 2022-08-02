import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  loop: true,
  clickable: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});
