'use strict';

const menu = document.querySelector('.header__menu');
const menuLinks = menu.querySelectorAll('.menu__link');
const menuBurger = document.querySelector('.header__burder');
const menuClose = document.querySelector('.menu__close');
const body = document.querySelector('.wrapper');

function activeMenu() {
  menu.classList.add('active');
  body.style.overflow = 'hidden';

  menuLinks.forEach(item => {
    item.addEventListener('click', closeMenu)
  })
}
function closeMenu() {
  menu.classList.remove('active');
  body.style.overflow = 'auto';
}

menuBurger.addEventListener('click', activeMenu)
menuClose.addEventListener('click', closeMenu)
