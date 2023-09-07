'use strict';

const buttonOne = document.querySelector('#radio1');
const buttonTwo = document.querySelector('#radio2');
const buttonThree = document.querySelector('#radio3');
const buttonFour = document.querySelector('#radio4');

const gallery = document.querySelector('.gallery__container');

buttonOne.addEventListener('click', () => {
  gallery.style.transform = 'translateX(0px)';
});

buttonTwo.addEventListener('click', () => {
  gallery.style.transform = 'translateX(-300px)';
});

buttonThree.addEventListener('click', () => {
  gallery.style.transform = 'translateX(-600px)';
});

buttonFour.addEventListener('click', () => {
  gallery.style.transform = 'translateX(-700px)';
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const submit = document.querySelector('#myForm');

submit.addEventListener('click', submitClick, false);

function submitClick(event) {
  event.preventDefault();
  submit.reset();

  return false;
}
