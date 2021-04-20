'use strict';

const toggler = document.querySelector('.header__menu-toggler');
const menu = document.querySelector('.menu');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('header__menu-toggler--active');
  menu.classList.toggle('menu--active');
});
