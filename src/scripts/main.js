'use strict';

const menu = document.querySelector('.header');
const button = document.querySelector('.header__menu--link');

button.addEventListener('hashchange', () => {
  if (button.hash === '#menu') {
    menu.classList.add('page__menu');
  } else {
    menu.classList.remove('page__menu');
  }
});
