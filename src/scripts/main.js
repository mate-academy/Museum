'use strict';

const sliderContent = document.querySelector('.slider__content');
const pointerButton1 = document.querySelector('.pointer__button--1');
const pointerButton2 = document.querySelector('.pointer__button--2');
const pointerButton3 = document.querySelector('.pointer__button--3');
const pointerButton4 = document.querySelector('.pointer__button--4');

document.querySelector('.pointer__button--1')
  .addEventListener('click', function() {
    sliderContent.style.transform = 'translateX(0%)';
    pointerButton1.style.backgroundColor = '#1a5a4c';
    pointerButton2.style.backgroundColor = '#e0e0e0';
    pointerButton3.style.backgroundColor = '#e0e0e0';
    pointerButton4.style.backgroundColor = '#e0e0e0';
  });

document.querySelector('.pointer__button--2')
  .addEventListener('click', function() {
    sliderContent.style.transform = 'translateX(-20%)';
    pointerButton2.style.backgroundColor = '#1a5a4c';
    pointerButton1.style.backgroundColor = '#e0e0e0';
    pointerButton3.style.backgroundColor = '#e0e0e0';
    pointerButton4.style.backgroundColor = '#e0e0e0';
  });

document.querySelector('.pointer__button--3')
  .addEventListener('click', function() {
    sliderContent.style.transform = 'translateX(-40%)';
    pointerButton3.style.backgroundColor = '#1a5a4c';
    pointerButton2.style.backgroundColor = '#e0e0e0';
    pointerButton1.style.backgroundColor = '#e0e0e0';
    pointerButton4.style.backgroundColor = '#e0e0e0';
  });

document.querySelector('.pointer__button--4')
  .addEventListener('click', function() {
    sliderContent.style.transform = 'translateX(-60%)';
    pointerButton4.style.backgroundColor = '#1a5a4c';
    pointerButton2.style.backgroundColor = '#e0e0e0';
    pointerButton3.style.backgroundColor = '#e0e0e0';
    pointerButton1.style.backgroundColor = '#e0e0e0';
  });
