'use strict';

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('#menu');
const closeBtn = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
  menu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('is-open');
});
