// @ts-nocheck
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // centeredSlides: true,
  spaceBetween: 20,
  slidesPerView: 'auto',
  effect: 'slide',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* #region hide menu icon on click */
const menuIcon = document.querySelector('.page__menu-icon-img');
const closeIcon = document.querySelector('.menu__close-link');
// const icons = document.querySelector('.top-bar__icons');
// const logoTopBar = document.querySelector('.menu .top-bar__logo-img');
const menuLinks = document.querySelectorAll(
  '.menu__nav-list .menu__nav-list-item',
);

console.log(menuIcon);
console.log(closeIcon);
console.log(menuLinks);

menuIcon?.addEventListener('click', () => {
  menuIcon.classList.toggle('page__menu-icon-img--hide-show');
});

closeIcon?.addEventListener('click', () => {
  menuIcon.classList.toggle('page__menu-icon-img--hide-show');
});

// logoTopBar?.addEventListener('click', () => {
//   icons.classList.toggle('top-bar__icons--show');
// });

menuLinks?.forEach((node) => {
  node?.addEventListener('click', () => {
    menuIcon.classList.toggle('page__menu-icon-img--hide-show');
  });
});
/* #end hide menu icon on click */
