'use strict';

const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.header__burger');
const logo = document.querySelector('.header__logo-text');
const sideText = document.querySelector('.header__side-text');
const hRight = document.querySelector('.header__right');

burger.onclick = function headerMenu() {
  menu.classList.toggle('header__menu--open');
  burger.classList.toggle('header__burger--active');
  logo.classList.toggle('header__logo-text--positioned');
  sideText.classList.toggle('header__side-text--positioned');
  hRight.classList.toggle('header__right--positioned');
};
