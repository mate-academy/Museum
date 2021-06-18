'use strict';

const hamburger = document.querySelector('.header__hamburger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerLink = document.querySelectorAll('.burger-menu__link');
const burgerHtml = document.querySelector('.page');
const headerLink = document.querySelector('.header__logo-link');

hamburger.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu--active');
  hamburger.classList.toggle('header__hamburger--active');
});

for (const value of burgerLink) {
  value.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu--active');
    hamburger.classList.toggle('header__hamburger--active');
    burgerHtml.classList.toggle('page--active');
  });
}

headerLink.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu--active');
  hamburger.classList.remove('header__hamburger--active');
  burgerHtml.classList.remove('page--active');
});

hamburger.addEventListener('click', () => {
  burgerHtml.classList.toggle('page--active');
});

const form = document.querySelector('.subscribe__form');
const inputs
  = document.querySelectorAll('.subscribe__form-email');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
