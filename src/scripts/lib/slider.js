'use strict';

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';

let mySwiper = null;
const swiperWrapper = document.querySelector('.gallery__wrapper');

function initSlider() {
  const pcBreakPoint = 1210;

  if (
    window.innerWidth <= pcBreakPoint
    && document.querySelector('.gallery__slider')
  ) {
    swiperWrapper.classList.add('swiper-wrapper');

    mySwiper = new Swiper('.gallery__slider', {
      modules: [Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

window.addEventListener('load', function() {
  initSlider();
});

window.addEventListener('resize', function() {
  if (mySwiper !== null) {
    mySwiper.destroy();
    mySwiper = null;
    swiperWrapper.classList.remove('swiper-wrapper');
  }

  initSlider();
});
