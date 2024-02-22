'use strict';

const openMenu = document.querySelector('.icon--menu');
const closeMenu = document.querySelector('.icon--close');

openMenu.addEventListener('click', function() {
  document.querySelector('.page').classList.toggle('target-active');
});

closeMenu.addEventListener('click', function() {
  document.querySelector('.page').classList.toggle('target-active');
});

let counter = 1;

setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
  counter++;

  if (counter > 4) {
    counter = 1;
  }
}, 5000);
