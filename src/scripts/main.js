'use strict';

const form = document.querySelector('#form');

form.addEventListener('submit', event => {
  event.preventDefault();
  event.target.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page_content-with-menu');
  } else {
    document.body.classList.remove('page_content-with-menu');
  }
});
