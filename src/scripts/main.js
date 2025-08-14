'use strict';
const slider = document.querySelector('.slider');
const photos = document.querySelector('.slider__photos');
const btn1 = document.querySelector('.slider__button--1');
const btn2 = document.querySelector('.slider__button--2');
const btn3 = document.querySelector('.slider__button--3');
const btn4 = document.querySelector('.slider__button--4');

const classes = [
  'slider__photos--1',
  'slider__photos--2',
  'slider__photos--3',
  'slider__photos--4',
];

btn1.addEventListener('click', slide1);
btn2.addEventListener('click', slide2);
btn3.addEventListener('click', slide3);
btn4.addEventListener('click', slide4);



function slide1() {
  const prevBtn = document.querySelector('.slider__button--active');

  prevBtn.classList.remove('slider__button--active');
  btn1.classList.add('slider__button--active');

  for (let cl of classes) {
    photos.classList.remove(cl);
  }

  photos.classList.add('slider__photos--1');
}

function slide2() {
  const prevBtn = document.querySelector('.slider__button--active');

  prevBtn.classList.remove('slider__button--active');
  btn2.classList.add('slider__button--active');

  for (let cl of classes) {
    photos.classList.remove(cl);
  }

  photos.classList.add('slider__photos--2');
}

function slide3() {
  const prevBtn = document.querySelector('.slider__button--active');

  prevBtn.classList.remove('slider__button--active');
  btn3.classList.add('slider__button--active');

  for (let cl of classes) {
    photos.classList.remove(cl);
  }

  photos.classList.add('slider__photos--3');
}

function slide4() {
  const prevBtn = document.querySelector('.slider__button--active');

  prevBtn.classList.remove('slider__button--active');
  btn4.classList.add('slider__button--active');

  for (let cl of classes) {
    photos.classList.remove(cl);
  }

  photos.classList.add('slider__photos--4');
}
