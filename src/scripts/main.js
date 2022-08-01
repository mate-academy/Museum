import Swiper from '../../node_modules/swiper/swiper-bundle';

// eslint-disable-next-line strict, no-new
new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },

  direction: 'horizontal',
  loop: true,
});
