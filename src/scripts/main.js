'use strict';

const toggler = document.querySelector('.header__nav-toggler');
const menu = document.querySelector('.header__nav');

const toggleMenu = () => {
  toggler.classList.toggle('header__nav-toggler--active');
  menu.classList.toggle('header__nav--active');
};

toggler.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);
