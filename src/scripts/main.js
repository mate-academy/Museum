'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});

const form = document.querySelector('.subscribe__form');

form.addEventListener('submit', formSend);

function formSend(e) {
  e.preventDefault();
}
