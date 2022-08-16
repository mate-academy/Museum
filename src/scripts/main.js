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

document
  .querySelector('#form')
  .addEventListener('click', (event) => {
    document.getElementById('output-box')
      .innerHTML += 'Sorry! Enter your E-mail, please';
    event.preventDefault();
  }, false);
