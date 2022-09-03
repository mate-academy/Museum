'use strict';

const form = document.getElementById('formID');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});
