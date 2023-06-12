'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--open-menu');
  } else {
    document.body.classList.remove('page__body--open-menu');
  }
});

function submitForm(event) {
  event.preventDefault();
  document.querySelector('#form').reset();
  window.location.hash = '#home';
}

document.querySelector('#form').addEventListener('submit', submitForm);
