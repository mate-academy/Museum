'use strict';

const menuOpenButton = document.querySelector('.icon--burger');
const menuBlock = document.querySelector('.menu');
const submitButton = document.querySelector('.subscription__submit');

menuOpenButton.addEventListener('click', () => {
  menuBlock.style.cssText = 'transition: transform 1s; transform:none';
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    menuBlock.style.cssText = 'transition: transform 1s; transform:none;';
    document.body.style.cssText = 'overflow-y: hidden;';
  } else {
    const cssText = 'transition: transform 1s; transform: translateY(-100%)';

    menuBlock.style.cssText = cssText;
    document.body.style.cssText = 'overflow-y: scroll;';
  }
});

submitButton.addEventListener('click', (e) => {
  document.querySelector('form').reset();
  e.preventDefault();
});
