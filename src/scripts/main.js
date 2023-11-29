'use strict';

document.getElementById('email-form').addEventListener('submit',
  function(event) {
    event.preventDefault();
    event.stopPropagation();

    const input = document.getElementsByClassName('main__nav-email')[0];

    input.value = '';
  });
