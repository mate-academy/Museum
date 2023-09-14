'use strict';

const form = document.querySelector('#contacts-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
