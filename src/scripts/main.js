'use strict';

const burger = document.querySelector('.header__burger');
const toggler = document.querySelector('.burger__menu');

toggler.onclick = function toggleSidebar() {
  burger.classList.toggle('header__burger--open');
};

const width = 300;
const list = document.querySelector('.gallery__switch-images');
let position = 0;

document.querySelector('.prev').onclick = function() {
  position = position + width > 0 ? -900 : position + width;
  list.style.marginLeft = position + 'px';
};

document.querySelector('.next').onclick = function() {
  position = position - width < -900 ? 0 : position - width;
  list.style.marginLeft = position + 'px';
};
