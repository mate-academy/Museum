'use stict';

const form = document.querySelector('.subscribe__form');
const email = document.querySelector('.subscribe__email');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

form.addEventListener('submit', () => {
  window.location.hash = '';
  email.value = '';
});
