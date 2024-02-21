'use strict';

const openMenu = document.querySelector('.icon--menu');
const closeMenu = document.querySelector('.icon--close');

openMenu.addEventListener('click', function() {
  document.querySelector('.page').classList.toggle('target-active');
});

closeMenu.addEventListener('click', function() {
  document.querySelector('.page').classList.toggle('target-active');
});
