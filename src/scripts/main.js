'use strict';
document.querySelector('.subscribe__form').addEventListener('submit',
  function(event) {
    event.preventDefault();
    document.querySelector('.subscribe__form').reset();
  })