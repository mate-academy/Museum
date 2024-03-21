'use strict';

const menuListItems = document.querySelectorAll('.menu__list');
const closeButton = document.querySelector('.icon--close');
const menuButton = document.querySelector('.icon--menu');

document.addEventListener('DOMContentLoaded', function() {
  menuButton.addEventListener('click', function() {
    document.querySelector('.page').style.overflow = 'hidden';
  });

  closeButton.addEventListener('click', function() {
    document.querySelector('.page').style.overflow = 'auto';
  });

  menuListItems.forEach(function(item) {
    item.addEventListener('click', function() {
      document.querySelector('.page').style.overflow = 'auto';
    });
  });
});

let counter = 1;

setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
  counter++;

  if (counter > 4) {
    counter = 1;
  }
}, 5000);
