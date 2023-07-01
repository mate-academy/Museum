'use strict';

window.addEventListener('hashchange', () => {
  const menu = document.querySelector('.header__menu-content');

  if (window.location.hash === '#menu-burger') {
    menu.classList.add('header__menu-content--show');
  } else {
    menu.classList.remove('header__menu-content--show');
  }
});

window.addEventListener('submit', (event) => {
  document.getElementById('email').value = '';

  event.preventDefault();
});
