'use strict';

const form = document.querySelector('.subscription__form');
const emailInput = form.querySelector('.subscription__email');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  emailInput.value = '';
  window.scrollTo(0, 0);
});

const body = document.querySelector('.page__body');
const menuToggler = document.querySelector('.icon--menu');

menuToggler.addEventListener('click', (event) => {
  body.classList.add('page__body--no-overflow');
});

const menuLinks = document.querySelectorAll('.menu__link');

for (const link of menuLinks) {
  link.addEventListener('click', () => {
    body.classList.remove('page__body--no-overflow');
  });
};
