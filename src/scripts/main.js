'use strict';

window.addEventListener('hashchange', () => {
  const menu = document.querySelector('.header__menu');

  if (window.location.hash === '#menu-burger') {
    menu.classList.add('header__menu--show');
  } else {
    menu.classList.remove('header__menu--show');
  }
});
