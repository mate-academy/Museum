'use strict';
/* eslint-disable */

const form = document.querySelector('.subscribe__form');
const inputs = document.querySelectorAll('.subscribe__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(elem => elem.value = '');

  textarea.value = '';
});
