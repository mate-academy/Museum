'use strict';

const form = document.getElementById('formId');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  evt.target.reset();
});
