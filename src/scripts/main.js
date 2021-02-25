'use strict';

const menu = document.querySelector('.js-header__nav');
const menuOpen = document.querySelector('.js-header__burger');
const menuClose = document.querySelector('.js-nav__close');
const menuLinks = document.querySelectorAll('.nav__link');

menuOpen.addEventListener('click', function() {
  menu.style.transform = 'translateY(0)';
});

menuClose.addEventListener('click', function() {
  menu.style.transform = 'translateY(-100%)';
});

menuLinks.forEach(item =>
  item.addEventListener('click', function() {
    menu.style.transform = 'translateY(-100%)';
  })
);
