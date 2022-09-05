'use strict';

document.getElementById('my-form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.target[0].value = '';
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
