'use strict';

const form = document.querySelector('.subscription__button');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  e.target.reset();
});
