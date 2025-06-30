'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.header__menu-icon-close');
const overlay = document.querySelector('.header__overlay');

function openMenu() {
  document.body.classList.add('is-open');
}

function closeMenuFn() {
  document.body.classList.remove('is-open');
}

menuToggle.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFn);
overlay.addEventListener('click', closeMenuFn);
