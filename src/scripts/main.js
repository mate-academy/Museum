'use strict';

const page = document.documentElement;

const menuOn = document.querySelector('.icon--menu');
const menuOff1 = document.querySelector('.icon--close');
const menuOff2 = document.querySelector('.menu__list');

menuOn.addEventListener('click', () => {
  page.classList.add('no-scroll');
});

menuOff1.addEventListener('click', () => {
  page.classList.remove('no-scroll');
});

menuOff2.addEventListener('click', () => {
  page.classList.remove('no-scroll');
});
