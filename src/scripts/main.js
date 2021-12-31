'use strict';

const input = document.querySelector('.subscribtion__input');
const form = document.querySelector('.subscribtion__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  input.value = '';
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
