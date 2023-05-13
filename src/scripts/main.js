'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.querySelector('input[type="text"]').disabled = true;
    document.body.classList.add('page__body--with-menu');
  } else {
    document.querySelector('input[type="text"]').disabled = false;
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form--subscription');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});
