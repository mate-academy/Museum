'use stict';

const form = document.querySelector('.subscribe__form');
const overlay = document.querySelector('.page__overlay');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    overlay.classList.add('page__overlay-active');
  } else {
    overlay.classList.remove('page__overlay-active');
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  form.reset();
});
