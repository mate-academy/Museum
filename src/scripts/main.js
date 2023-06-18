'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
