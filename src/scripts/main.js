'use strict';

const nav = document.querySelector('.header__menu');
const toggler = document.querySelector('.toggler');
const lab = document.querySelector('.header__label-for-toggler');

lab.onclick = function toggleSidebar() {
  nav.classList.toggle('header__menu--has-popup');
  toggler.classList.toggle('toggler--open');
};
