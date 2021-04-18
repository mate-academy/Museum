'use strict';

const form = document.querySelector('.subscription__form');
const input = document.querySelector('.subscription__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  input.value = '';
});
