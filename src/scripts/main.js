'use strict';

const menu = document.querySelector('.js-header__nav');
const menuOpen = document.querySelector('.js-header__burger');
const menuClose = document.querySelector('.js-nav__close');

menuOpen.addEventListener('click', function() {
  menu.style.transform = 'translateY(0)';
});

menuClose.addEventListener('click', function() {
  menu.style.transform = 'translateY(-100%)';
});
