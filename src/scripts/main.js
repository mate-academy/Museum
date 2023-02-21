'use strict';

const form = document.querySelector('.form-js');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
