'use strict';

const page = document.querySelector('.page');
const menu = document.querySelector('.icon--menu');
const close = document.querySelector('.icon--close');
const menuItem = document.querySelector('.menu__items');

menu.addEventListener('click', (event) => {
  page.classList.add('not-active');
});

close.addEventListener('click', (event) => {
  page.classList.remove('not-active');
});

menuItem.addEventListener('click', (event) => {
  page.classList.remove('not-active');
});

const submitButton = document.querySelector('.button--red');

submitButton.addEventListener('click', (event) => {
  document.location.reload();
});
