'use strict';

const body = document.querySelector('.page__body');
const form = document.querySelector('.subscription__form');
const email = document.querySelector('.subscription__email');

function scrollChange() {
  if (window.location.hash === '#menu') {
    body.style.overflow = 'hidden';
  }

  if (window.location.hash !== '#menu') {
    body.style.overflow = '';
  }
}

form.addEventListener('submit', () => {
  window.location.hash = '';
  email.value = '';
});

window.onhashchange = scrollChange;

scrollChange();
