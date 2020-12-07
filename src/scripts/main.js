'use strict';

const nav = document.querySelector('.header__menu');
const toggler = document.querySelector('.toggler');

toggler.onclick = function toggleSidebar() {
  nav.classList.toggle('header__menu--has-popup');
  toggler.classList.toggle('toggler--open');
};
