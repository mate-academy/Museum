'use strict';

const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', function() {
  nav.classList.toggle('nav--active');
  hamburger.classList.toggle('header__hamburger--close');
});
