'use strict';

window.addEventListener('hashchange', () => {
  const menu = document.querySelector('.header__menu-content');
  const body = document.querySelector('.page__body');

  if (window.location.hash === '#menu-burger') {
    menu.classList.add('header__menu-content--show');
    body.classList.add('page__body--scrol');
  } else {
    menu.classList.remove('header__menu-content--show');
    body.classList.remove('page__body--scrol');
  }
});

window.addEventListener('submit', (event) => {
  document.getElementById('email').value = '';

  event.preventDefault();
});
