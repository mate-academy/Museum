'use strict';

// const menu = document.querySelector('.menu-dimmer');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('menu-dimmer--active', 'page__body--with-menu');
  } else {
    document.body.classList.remove(
      'menu-dimmer--active',
      'page__body--with-menu'
    );
  }
});

const form = document.querySelector('.subscription__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
