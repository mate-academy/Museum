'use strict';

const navToogler = document.querySelector('.icon--menu');
const navCloser = document.querySelector('.icon--cross');
const navWrapper = document.querySelector('.menu');

navToogler.addEventListener('click', () => {
  navWrapper.classList.add('menu--active');
  navToogler.classList.add('hide');
  navToogler.classList.remove('show');
});

navCloser.addEventListener('click', () => {
  navWrapper.classList.remove('menu--active');
  navToogler.classList.add('show');
});
