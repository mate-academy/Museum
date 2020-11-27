'use strict';

const menuContainer = document.querySelector('.menu__burger');
const burgerLine = document.querySelector('.menu__burger-line');
const menuNavWrapp = document.querySelector('.menu__nav-wrapper');
const wrapperBurger = document.querySelector('.menu__wrapper-burger');
const headerLogo = document.querySelector('.header__logo');
const menuLink = document.querySelector('.menu__list');
const lockScroll = document.querySelector('body');

menuContainer.onclick = function() {
  menuContainer.classList.toggle('active');
  burgerLine.classList.toggle('active');
  menuNavWrapp.classList.toggle('active');
  wrapperBurger.classList.toggle('active');
  headerLogo.classList.toggle('active');
  lockScroll.classList.toggle('lock');
};

menuLink.onclick = function() {
  menuContainer.classList.remove('active');
  burgerLine.classList.remove('active');
  menuNavWrapp.classList.remove('active');
  wrapperBurger.classList.remove('active');
  headerLogo.classList.remove('active');
  lockScroll.classList.remove('lock');
};

headerLogo.onclick = function() {
  menuContainer.classList.remove('active');
  burgerLine.classList.remove('active');
  menuNavWrapp.classList.remove('active');
  wrapperBurger.classList.remove('active');
  headerLogo.classList.remove('active');
  lockScroll.classList.remove('lock');
};
