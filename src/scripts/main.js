'use strict';

const burger = document.querySelector('.header__burger');
const burgerWrapper = document.querySelector('.header__burger-wrapper');
const navList = document.querySelector('.nav');

burgerWrapper.addEventListener('click', function() {
  burger.classList.toggle('header__burger_close');
  navList.classList.toggle('header__nav_opened');
});
