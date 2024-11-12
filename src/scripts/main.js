'use strict';

const menu = document.querySelector('.header__menu');
const menuBurger = document.querySelector('.header__burder');
const menuClose = document.querySelector('.menu__close');
const body = document.querySelector('.wrapper');

function activeMenu() {
  body.classList.add('active');
  // body.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  // body.style.opacity = 0.1;
}
function closeMenu() {
  body.classList.remove('active');
  // body.style.backgroundColor = 'inherit'
}

menuBurger.addEventListener('click', activeMenu)
menuClose.addEventListener('click', closeMenu)
