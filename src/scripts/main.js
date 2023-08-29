'use strict';
import Swiper from 'swiper/swiper-bundle.min.mjs';

// swiper
let swiper = null;

function initSwiper() {
  swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    speed: 2000,

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,

      renderBullet: function(index, className) {
        return '<span class="' + className + '"></span>';
      },
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}

function checkScreenWidth() {
  if (window.innerWidth < 1280) {
    if (!swiper) {
      initSwiper();
    }
  } else {
    if (swiper) {
      swiper.destroy();
      swiper = null;
    }
  }
}

window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
