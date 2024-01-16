'use strict';

const form = document.querySelector('.subscription__form');
const input = document.querySelector('.subscription__form-field');

form.addEventListener('submit', function(event) {
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
