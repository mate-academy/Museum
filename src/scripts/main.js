'use strict';

const openMenu = document.querySelector('.main-page__menu');
const closeMenu = document.querySelector('.menu__close');
const body = document.querySelector('.body');

openMenu.addEventListener('click', function() {
  body.classList.add('no-active');
});

closeMenu.addEventListener('click', function() {
  body.classList.remove('no-active');
});
