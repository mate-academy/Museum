'use strict';

const menu = document.getElementById('menu');
const page = document.querySelector('.page__body');
const pageWrapper = document.querySelector('.page__wrapper');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    menu.classList.add('page__menu--target');
    page.classList.add('page__body--overflow-hidden');
    pageWrapper.classList.add('page__wrapper--on');
  } else {
    menu.classList.remove('page__menu--target');
    page.classList.remove('page__body--overflow-hidden');
    pageWrapper.classList.remove('page__wrapper--on');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  form.reset();
  event.preventDefault();

  window.location.hash = 'header';
});
