/* eslint-disable no-return-assign */
'use strict';

const form = document.querySelector('.subscribe__form');
const inputs = document.querySelectorAll('.subscribe__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(elem => elem.value = '');
});
