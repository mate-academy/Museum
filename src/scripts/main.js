'use strict';

const form = document.querySelector('.contact-us__form');
const inputs = document.querySelectorAll('.contact-us__form-input');
const textarea = document.querySelector('.contact-us__form-text');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }

  /* inputs.forEach(elem => elem.value = ''); */

  textarea.value = '';
});
