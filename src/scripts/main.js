'use strict';

const form = document.querySelector('.subscribe__form');
const inputs = document.querySelectorAll('.subscribe__form-email');
/* const textarea = document.querySelector('.subscribe__form-button'); */

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }

  /* inputs.forEach(elem => elem.value = ''); */

  /* textarea.value = ''; */
});
