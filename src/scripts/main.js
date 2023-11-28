'use strict';

document.getElementById('email-form').addEventListener('submit',
  function(event) {
    event.preventDefault();
    event.stopPropagation();
  });
