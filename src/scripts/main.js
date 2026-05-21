'use strict';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-menu');
const logo = document.querySelector('.header__logo');
const topBar = document.querySelector('.header__top-bar');

if (burger && menu && logo && topBar) {
  burger.addEventListener('click', toggleMenu);
}

// ====================== MENU ======================
function toggleMenu() {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header-menu--open');
  logo.classList.toggle('is-hidden');

  if (!menu.classList.contains('header-menu--open') && window.scrollY > 0) {
    topBar.classList.add('is-hidden');
  } else {
    topBar.classList.remove('is-hidden');
  }
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 0 && !menu.classList.contains('header-menu--open')) {
    topBar.classList.add('is-hidden');
  } else {
    topBar.classList.remove('is-hidden');
  }
});
