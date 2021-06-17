'use strict';

const hamburger = document.querySelector('.header__hamburger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerLink = document.querySelector('.burger-menu__link');
const burgerHtml = document.querySelector('.page');
const headerLink = document.querySelector('.header__logo-link');

hamburger.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu--active');
  hamburger.classList.toggle('header__hamburger--active');
});

burgerLink.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu--active');
  hamburger.classList.toggle('header__hamburger--active');
  burgerHtml.classList.toggle('page--active');
});

headerLink.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu--active');
  hamburger.classList.remove('header__hamburger--active');
  burgerHtml.classList.remove('page--active');
});

hamburger.addEventListener('click', () => {
  burgerHtml.classList.toggle('page--active');
});
