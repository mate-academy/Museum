'use strict';

const form = document.querySelector('.follow__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  window.scrollTo({ top: 0 });
  form.reset();
});
