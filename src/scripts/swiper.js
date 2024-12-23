import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css';

new Swiper('#swiper-gallery', {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  centeredSlides: false,
  enabled: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      enabled: true,
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      enabled: false,
      spaceBetween: 0,
    },
  },
});
