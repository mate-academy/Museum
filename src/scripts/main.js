'use strict';

const burger = document.querySelector('.top__burger');
const body = document.querySelector('.body');
const closes =  document.querySelector('.top__close');
const link1 =  document.querySelector('.item-about');
const link2 =  document.querySelector('.item-gallery');
const link3 =  document.querySelector('.item-events');
const link4 =  document.querySelector('.item-contacts');
const link5 =  document.querySelector('.bottom__subtitle');
const btn = document.querySelector('.tickets__row');

burger.addEventListener('click', () => {
    body.classList.add('lock');
  });

closes.addEventListener('click', () => {
  body.classList.remove('lock');
});

btn.addEventListener('click', () => {
  body.classList.remove('lock');
});

link1.addEventListener('click', () => {
  body.classList.remove('lock');
});
link2.addEventListener('click', () => {
  body.classList.remove('lock');
});
link3.addEventListener('click', () => {
  body.classList.remove('lock');
});
link4.addEventListener('click', () => {
  body.classList.remove('lock');
});
link5.addEventListener('click', () => {
  body.classList.remove('lock');
});
const swiper = new Swiper('.swiper', {

  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

document.getElementById("form").reset();
