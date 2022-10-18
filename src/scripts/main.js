'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__content--with-menu');
  } else {
    document.body.classList.remove('page__content--with-menu');
  }
});

const forms = document.querySelectorAll('.form__content');

const formField = document.querySelector('.form');

formField.addEventListener('submit', (event) => {
  event.preventDefault();

  forms.forEach((form) => {
    form.value = '';
  });
});
