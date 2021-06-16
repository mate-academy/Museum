'use strict';

const hamburger = document.querySelector('.hamburger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerLink = document.querySelector('.burger-menu__link');
const burgerHtml = document.querySelector('html');
const headerLink = document.querySelector('.header__logo-link');

hamburger.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu--active');
  hamburger.classList.toggle('hamburger--active');
});

burgerLink.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu--active');
  hamburger.classList.toggle('hamburger--active');
  burgerHtml.classList.toggle('html--active');
});

headerLink.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu--active');
  hamburger.classList.toggle('hamburger--active');
  burgerHtml.classList.toggle('html--active');
});

hamburger.addEventListener('click', () => {
  burgerHtml.classList.toggle('html--active');
});
