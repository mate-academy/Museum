'use strict';

const header = document.querySelector('.header');
const burger = header.querySelector('.burger');
const navMenu = header.querySelector('.nav');
const navLinks = header.querySelectorAll('.nav__link');
const buttonUp = document.querySelector('.button-up');

function menuToggler(burger, navMenu) {
  burger.classList.toggle('burger--active');
  navMenu.classList.toggle('nav--active');

  if (navMenu.classList.contains('nav--active'))
    document.body.style.overflow = 'hidden';
  else document.body.style.overflow = '';
}

function menuAction(burger, navMenu) {
  burger.addEventListener('click', () => {
    menuToggler(burger, navMenu);
  });
}

function navLinksAction(navLinks, navMenu, burger) {
  for (let item of navLinks) {
    item.addEventListener('click', () => {
      menuToggler(burger, navMenu);
    });
  }
}

function headerScroll(header, buttonUp) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('header--active');
      buttonUp.classList.add('button-up--active');
    } else {
      header.classList.remove('header--active');
      buttonUp.classList.remove('button-up--active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  menuAction(burger, navMenu);
  headerScroll(header,buttonUp);
  navLinksAction(navLinks, navMenu, burger);
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints:{
    768:{
      slidesPerView: 2,
    },
    1200:{
      autoplay: null,
      spaceBetween: 0,
      loop: false,
      pagination: null,
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
