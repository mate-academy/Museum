'use strict';

const menuBurger = document.querySelector('.menu__burger');
const burgerLine = document.querySelector('.menu__burger-line');
const menuNavWrapp = document.querySelector('.menu__nav-wrapper');
const wrapperBurger = document.querySelector('.menu__wrapper-burger');
const headerLogo = document.querySelector('.header__logo');
const menuLink = document.querySelector('.menu__list');
const lockScroll = document.querySelector('body');

menuBurger.onclick = function() {
  menuBurger.classList.toggle('menu__burger--active');
  burgerLine.classList.toggle('menu__burger-line--active');
  menuNavWrapp.classList.toggle('menu__nav-wrapper--active');
  wrapperBurger.classList.toggle('menu__wrapper-burger--active');
  headerLogo.classList.toggle('header__logo--active');
  lockScroll.classList.toggle('body--lock');
};

menuLink.onclick = function() {
  menuBurger.classList.remove('menu__burger--active');
  burgerLine.classList.remove('menu__burger-line--active');
  menuNavWrapp.classList.remove('menu__nav-wrapper--active');
  wrapperBurger.classList.remove('menu__wrapper-burger--active');
  headerLogo.classList.remove('header__logo--active');
  lockScroll.classList.remove('body--lock');
};

headerLogo.onclick = function() {
  menuBurger.classList.remove('menu__burger--active');
  burgerLine.classList.remove('menu__burger-line--active');
  menuNavWrapp.classList.remove('menu__nav-wrapper--active');
  wrapperBurger.classList.remove('menu__wrapper-burger--active');
  headerLogo.classList.remove('header__logo--active');
  lockScroll.classList.remove('body--lock');
};
