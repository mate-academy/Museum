'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});

let offset = 0;
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.slider__button--1')
  .addEventListener('click', function() {
    offset = 0;
    sliderLine.style.transform = 'translateX(-' + offset + '%)';
  });

document.querySelector('.slider__button--2')
  .addEventListener('click', function() {
    offset = 25;
    sliderLine.style.transform = 'translateX(-' + offset + '%)';
  });

document.querySelector('.slider__button--3')
  .addEventListener('click', function() {
    offset = 50;
    sliderLine.style.transform = 'translateX(-' + offset + '%)';
  });

document.querySelector('.slider__button--4')
  .addEventListener('click', function() {
    offset = 75;
    sliderLine.style.transform = 'translateX(-' + offset + '%)';
  });
