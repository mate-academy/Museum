'use strict';

const form = document.querySelector('.footer__forms');
const inputs = document.querySelectorAll('.footer__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
