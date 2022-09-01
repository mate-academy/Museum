'use strict';

const submit = document.getElementById('submit');

submit.addEventListener('click', function handleClick(event) {
  // if you are submitting a form (prevents page reload)
  event.preventDefault();

  const emailInput = document.getElementById('email');
  // const nameInput = document.getElementById('name');
  // const messageInput = document.getElementById('message');

  // Send value to server
  // console.log(emailInput.value);
  // console.log(nameInput.value);
  // console.log(messageInput.value);

  // clear input field
  emailInput.value = '';
  // nameInput.value = '';
  // messageInput.value = '';
});
