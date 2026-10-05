'use strict';

const form = document.querySelector('.subscription__form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    return;
  }

  form.reset();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
