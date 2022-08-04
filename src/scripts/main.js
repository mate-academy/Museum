import Swiper from 'swiper';

import 'swiper/swiper-bundle.css';

// eslint-disable-next-line no-new
new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const form = document.getElementById('formID');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});
