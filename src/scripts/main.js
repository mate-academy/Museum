'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.subscribe__form');
const input = document.querySelector('.subscribe__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  input.value = '';
});
