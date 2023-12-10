'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('MyForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
  });
});

const buttonOne = document.querySelector('#radio1');
const buttonTwo = document.querySelector('#radio2');
const buttonThree = document.querySelector('#radio3');
const buttonFour = document.querySelector('#radio4');

const gallery = document.querySelector('.gallery__image');

buttonOne.addEventListener('click', () => {
  gallery.style.transform = 'translateX(0px)';
});

buttonTwo.addEventListener('click', () => {
  gallery.style.transform = 'translateX(-250px)';
});

buttonThree.addEventListener('click', () => {
  gallery.style.transform = 'translateX(-550px)';
});

buttonFour.addEventListener('click', () => {
  gallery.style.transform = 'translateX(-910px)';
});

document.getElementById('MyForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('email').value = '';
});
