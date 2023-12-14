'use strict';

function submitForm(event) {
  event.preventDefault();

  const form = document.getElementById('form-email');

  form.reset();
}
submitForm();
