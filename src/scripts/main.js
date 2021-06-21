'use strict';

const form = document.querySelector('.signup__form');

const inputs = document.querySelectorAll('.signup__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
