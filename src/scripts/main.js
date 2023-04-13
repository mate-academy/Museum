'use strict';
// menu classes added for body and overlay

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    document.querySelector('.overlay').classList.add('overlay--active');
  } else {
    document.body.classList.remove('page__body--with-menu');
    document.querySelector('.overlay').classList.remove('overlay--active');
  }
});

// email for reset
const form = document.querySelector('#form');

form.addEventListener('submit', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
  form.reset();
};

// swiper connected from https://swiperjs.com/

// eslint-disable-next-line no-undef, no-unused-vars
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // other Swiper options
  slidesPerView: 1, // default number of slides per view
  breakpoints: {
    350: {
      slidesPerView: 1.2,
    },

    450: {
      slidesPerView: 1.5,
    },

    550: {
      slidesPerView: 1.75,
    },

    650: {
      slidesPerView: 2,
    },

    850: {
      slidesPerView: 2.25,
    },

    950: {
      slidesPerView: 2.5,
    },
  },

  autoplay: {
    delay: 1500,
    speed: 100,

    stopOnLastSlide: true,

    disableOnInteraction: false,
  },

  spaceBetween: 20,
  watchPOVerflow: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="'
      + className
      + '" style="background-color:#1A5A4C; margin-right: 22px;"></span>';
    },

  },
});
