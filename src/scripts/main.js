'use strict';
import '../styles/main.scss';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// eslint-disable-next-line no-new
new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  slidesPerView: 1.1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.1,
    },
    1200: {
      slidesPerView: 3.5,
    },
  },
});

const removeOverlay = () => {
  menuOverlay.classList.remove('is-active');
};

const openMenuButton = document.getElementById('header-burger');

const menuOverlay = document.getElementById('menu-overlay');

openMenuButton.addEventListener('click', () => {
  menuOverlay.classList.add('is-active');
});

const closeMenuButton = document.getElementById('aside-burger');

closeMenuButton.addEventListener('click', removeOverlay);

const links = document.querySelectorAll('a');

links.forEach((link) => {
  link.addEventListener('click', removeOverlay);
});

openMenuButton.removeEventListener('click', removeOverlay);
