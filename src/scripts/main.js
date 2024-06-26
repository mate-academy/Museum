'use strict';

const buttonOne = document.querySelector('#radio1');
const buttonTwo = document.querySelector('#radio2');
const buttonThree = document.querySelector('#radio3');
const buttonFour = document.querySelector('#radio4');
let widthImg = 0;
let slide = 0;

chooseButton();

window.addEventListener('resize', () => {
  widthImg = document.querySelector('.gallery__img').offsetWidth;
});

const gallery = document.querySelector('.gallery__container');

buttonOne.addEventListener('click', () => {
  slide = 0;
  gallery.style.transform = 'translateX(0px)';
  chooseButton();
});

buttonTwo.addEventListener('click', () => {
  slide = 1;
  gallery.style.transform = `translateX(-${widthImg + 20}px)`;
  chooseButton();
});

buttonThree.addEventListener('click', () => {
  slide = 2;
  gallery.style.transform = `translateX(-${widthImg * slide + 20 * slide}px)`;
  chooseButton();
});

buttonFour.addEventListener('click', () => {
  slide = 3;

  gallery.style.transform = `translateX(-${widthImg * slide + 20 * slide}px)`;
  chooseButton();
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

let positionX = 0;

let isMove = true;

gallery.addEventListener('touchstart', handleTouchStart);
gallery.addEventListener('touchmove', handleTouchMove);

function handleTouchStart(even) {
  const firstToch = even.touches[0];

  isMove = true;
  positionX = firstToch.clientX;
}

function handleTouchMove(even) {
  const touchmove = even.touches[0].clientX;
  const diff = positionX - touchmove;

  if (diff > 0) {
    if (Math.abs(diff.toFixed(0) > widthImg / 2 && isMove) && slide < 3) {
      slide++;
      gallery.style.transform = `translateX(-${slide * (widthImg + 20)}px)`;
      positionX = 0;
      isMove = false;
      chooseButton();
    }
  } else {
    if (diff < widthImg / 2 && isMove) {
      slide--;

      gallery.style.transform = `translateX(-${slide * (widthImg + 20)}px)`;
      isMove = false;
      chooseButton();
    }
  }
}

function chooseButton() {
  if (slide === 0) {
    const isActive = document.querySelector('.is-active');

    if (isActive) {
      isActive.classList.remove('is-active');
    }
    buttonOne.classList.add('is-active');
  } else if (slide === 1) {
    const isActive = document.querySelector('.is-active');

    if (isActive) {
      isActive.classList.remove('is-active');
    }
    buttonTwo.classList.add('is-active');
  } else if (slide === 2) {
    const isActive = document.querySelector('.is-active');

    if (isActive) {
      isActive.classList.remove('is-active');
    }
    buttonThree.classList.add('is-active');
  } else if (slide === 3) {
    const isActive = document.querySelector('.is-active');

    if (isActive) {
      isActive.classList.remove('is-active');
    }
    buttonFour.classList.add('is-active');
  }
}
