'use strict';

const swiper = new Swiper('.gallery', {
  direction: 'vertical',
  loop: true,

  pagination: {
    el: '.gallery__pagination',
  },
});
