/* eslint-disable no-new */
/* eslint-disable no-undef */
'use strict';

document.addEventListener('DOMContentLoaded', function() {
  new Swiper('#swiper-1', {
    effects: 'fade',
    pagination: {
      el: '#swiper-1 .swiper-pagination',
      clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 1,
        pagination: {
          el: '#swiper-1 .swiper-pagination',
          clickable: true,
        },
      },
      // When window width is >= 760px
      760: {
        slidesPerView: 2,
        pagination: {
          el: '#swiper-1 .swiper-pagination',
          clickable: true,
        },
      },
      1280: {
        slidesPerView: 4,
      },
    },
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const input = document.querySelector('.follow__input');
const inputBtn = document.querySelector('.follow__button');

inputBtn.addEventListener('click', () => {
  input.value = '';
});

const arrowBtn = document.querySelector('.content__button');

arrowBtn.addEventListener('click', () => {
  window.scroll(0, 0);
});
