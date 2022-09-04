'use strict';

const form = document.getElementById('email-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});
