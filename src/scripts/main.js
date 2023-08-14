'use strict';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const menu = document.querySelector('.page__menu');
const page = document.querySelector('.page__body');
const pageWrapper = document.querySelector('.page__wrapper');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    menu.classList.add('page__menu--target');
    page.classList.add('page__body--overflow-hidden');
    pageWrapper.classList.add('page__wrapper--on');
  } else {
    menu.classList.remove('page__menu--target');
    page.classList.remove('page__body--overflow-hidden');
    pageWrapper.classList.remove('page__wrapper--on');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  form.reset();
  event.preventDefault();

  window.location.hash = 'header';
});

document.addEventListener('DOMContentLoaded', function() {
  let swiper = null;

  function initSwiper() {
    swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      direction: 'horizontal',
      loop: true,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      slidesPerView: 1.07,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }

  function destroySwiper() {
    if (swiper !== null) {
      swiper.destroy();
      swiper = null;
    }
  }

  function handleSlider() {
    if (window.innerWidth < 1280) {
      initSwiper();
    } else {
      destroySwiper();
    }
  }

  window.addEventListener('load', handleSlider);
  window.addEventListener('resize', handleSlider);
});
