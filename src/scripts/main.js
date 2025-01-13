'use strict';

const dotted = document.querySelectorAll('.gallery__dot');
const images = document.querySelectorAll('.gallery__image');
const left = document.querySelector('.gallery__switch--left');
const right = document.querySelector('.gallery__switch--right');
const additionalImage = document.querySelector('.gallery__image-additional');
let index = 0;

left.addEventListener('click', () => {
  changeSlide(-1);
});

right.addEventListener('click', () => {
  changeSlide(1);
})

function changeSlide(number) {
  dotted[index].classList.remove('gallery__dot--active');
  images[index].classList.remove('gallery__image--active');

  if(index === 0) {
    images[4].classList.add('gallery__image--notActive');
  }

  index += number;

  if (index === dotted.length) {
    index = 0;
  }

  if (index === -1) {
    index = dotted.length -1;
  }

  dotted[index].classList.add('gallery__dot--active');
  images[index].classList.add('gallery__image--active');

  if(index === 0) {
    images[4].classList.remove('gallery__image--notActive');
  }
}

const body = document.querySelector('.page__body');
const open = document.querySelector('.header__menu');
const close = document.querySelector('.menu__close');

open.addEventListener('click', () => {
  body.classList.add('no-scroll');
})

close.addEventListener('click', () => {
  body.classList.remove('no-scroll');
})
