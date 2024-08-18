// 'use strict';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const html = document.querySelector('html');
const darkBackground = document.querySelector('.dark-background');
const navLink = document.querySelectorAll('.nav__link');

const toggleMobileMenu = () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  html.classList.toggle('active');
  darkBackground.classList.toggle('active');
};

const removeMobileMenu = () => {
  burger.classList.remove('active');
  mobileMenu.classList.remove('active');
  html.classList.remove('active');
  darkBackground.classList.remove('active');
};

burger.addEventListener('click', (event) => {
  event.preventDefault();

  toggleMobileMenu();
});

navLink.forEach((navLink) => {
  navLink.addEventListener('click', (event) => {
    removeMobileMenu();
  });
});

darkBackground.addEventListener('click', (event) => {
  event.preventDefault();

  removeMobileMenu();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    removeMobileMenu();
  }
});


const swiper = new Swiper('.swiper', {
  modules: [Autoplay, Pagination],
  loop: false,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 2000,
  },

  // speed: 1500,

  breakpoints: {
    640: {
      slidesPerView: 2.1,
    },
    1000: {
      slidesPerView: 3
    },
  },
});
