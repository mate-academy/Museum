'use strict';

const burgerMenuIco = document.querySelector('.header__burger-menu');
const overlay = document.querySelector('.menu__overlay');
const menu = document.querySelector('.menu__content');
const body = document.querySelector('.main');
const closeIco = document.querySelector('.menu__close');
const links = document.querySelectorAll('.menu__link');

burgerMenuIco.addEventListener('click', () => {
  overlay.classList.add('menu__overlay--visible');
  body.classList.add('main--no-scroll');
  menu.classList.add('menu__content--open');
});

closeIco.addEventListener('click', remover);

links.forEach(link => {
  link.addEventListener('click', remover);
});

function remover() {
  overlay.classList.remove('menu__overlay--visible');
  body.classList.remove('main--no-scroll');
  menu.classList.remove('menu__content--open');
}
