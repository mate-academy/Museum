'use strict';

const form = document.getElementById('form');
const userEmail = document.getElementById('user-email');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  userEmail.value = '';
});
