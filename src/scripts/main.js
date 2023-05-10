'use strict';

const form = document.querySelector('.subscribe__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
