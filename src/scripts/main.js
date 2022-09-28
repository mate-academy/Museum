'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});

const form = document.querySelector('.subscription__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});
