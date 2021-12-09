'use strict';
/* eslint-disable */

const form = document.querySelector('.follow__form');
const inputs = document.querySelectorAll('.follow__email');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(elem => elem.value = '');

  textarea.value = '';
});
