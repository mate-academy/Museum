'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--opened-menu');
  } else {
    document.body.classList.remove('page__body--opened-menu');
  }
});

const form = document.querySelector('#form-client');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
