'use strict';

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  document.getElementById('email').value = '';
});
