/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

let mySwiper;

function initSwiper() {
  if (window.innerWidth < 1280) {
    if (!mySwiper) {
      mySwiper = new Swiper('.gallery__slides', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        pagination: {
          el: '.custom-pagination',
          clickable: true,
          renderBullet: function(index, className) {
            return '<div class="custom-pagination-item ' + className + '"></div>';
          },
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
        },
      });
    }
  } else {
    if (mySwiper) {
      mySwiper.destroy();
      mySwiper = undefined;
    }
  }
}

window.addEventListener('DOMContentLoaded', initSwiper);
window.addEventListener('resize', initSwiper);
