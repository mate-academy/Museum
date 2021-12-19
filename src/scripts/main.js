'use strict';
/* eslint-disable */

const form = document.querySelector('.subscription__form');
const inputs = document.querySelectorAll('.subscription__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(elem => elem.value = '');

  textarea.value = '';
});
