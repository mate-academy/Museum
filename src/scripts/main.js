'use strict';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

let swiperInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const openBtn = document.querySelector('.header__menu');
  const closeBtn = document.querySelector('.menu__close');
  const links = document.querySelectorAll('.menu__link');

  const closeMenu = () => {
    menu.classList.remove('menu--open');
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.add('menu--open');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', closeMenu);
  links.forEach((link) => link.addEventListener('click', closeMenu));
});

document
  .querySelector('.contact__form')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    this.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

function initSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1280) {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }

    return;
  }

  if (!swiperInstance) {
    swiperInstance = new Swiper('.gallery__slider', {
      modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });
  }
}

function throttle(func, delay) {
  let lastCall = 0;

  return function(...args) {
    const now = new Date().getTime();

    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

const throttledSwiper = throttle(initSwiper, 200);

window.addEventListener('load', initSwiper);
window.addEventListener('resize', throttledSwiper);
