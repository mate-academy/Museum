'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');

    document.querySelector('.menu-dimmer').classList.add(
      'menu-dimmer--active'
    );
  } else {
    document.body.classList.remove(
      'page__body--with-menu'
    );

    document.querySelector('.menu-dimmer').classList.remove(
      'menu-dimmer--active'
    );
  }
});

const form = document.querySelector('.subscription__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
