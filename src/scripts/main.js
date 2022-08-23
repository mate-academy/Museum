'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

const myForm = document.querySelector('.subscription__form');

const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', function(event) {
  event.preventDefault();
  myForm.reset();
});

myForm.addEventListener('send-button', sendButton);
