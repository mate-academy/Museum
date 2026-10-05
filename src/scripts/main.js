'use strict';

const form = document.querySelector('.subscription__form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    return;
  }

  form.reset();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const menuButton = document.querySelector('.header__menu-button');
const menu = document.querySelector('.menu');
const menuCloseButton = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__link');

const openMenu = () => {
  menu.classList.add('menu--open');
  document.body.classList.add('page--menu-open');
};

const closeMenu = () => {
  menu.classList.remove('menu--open');
  document.body.classList.remove('page--menu-open');
};

menuButton.addEventListener('click', openMenu);
menuCloseButton.addEventListener('click', closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});
