'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const emailForm
= document.getElementById('get-user-email');
const emailInput
= document.getElementById('btn-mail');

emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  emailInput.value = '';
});
