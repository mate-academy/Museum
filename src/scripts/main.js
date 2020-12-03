'use strict';

const burger = document.querySelector('.header__burger');
const toggler = document.querySelector('.burger__menu');

toggler.onclick = function toggleSidebar() {
  burger.classList.toggle('header__burger--open');
};
