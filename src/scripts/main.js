'use strict';

const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.header__burger');
const logo = document.querySelector('.header__logo-text');
const title = document.querySelector('.header__title');
const link = document.querySelector('.header__link');
const sideText = document.querySelector('.header__side-text');

burger.onclick = function headerMenu() {
  menu.classList.toggle('header__menu--open');
  burger.classList.toggle('header__burger--active');
  logo.classList.toggle('header__logo-text--positioned');
  title.classList.toggle('header__title--positioned');
  link.classList.toggle('header__link--positioned');
  sideText.classList.toggle('header__side-text--positioned');
};
