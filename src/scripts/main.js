'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const subscribeForm = document.getElementById('subscribe_form');
  const subscribeInput = document.getElementById('subscribe_input');

  if (subscribeForm && subscribeInput) {
    subscribeForm.addEventListener('submit', (e) => {
      e.preventDefault();

      subscribeInput.value = '';
    });
  }
});
