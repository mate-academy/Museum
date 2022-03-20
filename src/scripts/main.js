'use strict';

function stopDefAction(evt) {
  document.getElementById('form').reset();
  evt.preventDefault();
}

document.getElementById('form').addEventListener(
  'submit', stopDefAction, false
);
