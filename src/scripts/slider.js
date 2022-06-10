'use strict';

const galleryImages = document.querySelector('.gallery__images');
const images = document.querySelectorAll('.gallery__image');
const dots = document.querySelectorAll('.gallery__dot');
const dotsArr = Array.from(dots);
const imagesContainer = document.querySelector('.gallery__container');
const imagesContainerWidth = parseFloat(window
  .getComputedStyle(imagesContainer).width);
const image = document.querySelector('.gallery__image');
const imageMargin = parseFloat(window
  .getComputedStyle(image).marginRight);
let startX = 0;
let endX = 0;
const stepsNumber = window.screen.width < 768
  ? images.length - 1
  : images.length - 2;
const stepSize = window.screen.width < 768
  ? imagesContainerWidth + imageMargin
  : (imagesContainerWidth + imageMargin) / 2;
let currentImage = 0;
let imagesTranslation = 0;

function setVisibleDots() {
  for (const dot of dots) {
    dot.classList.remove('gallery__dot--hidden');
  }
}

function setInvisibleDots() {
  for (let i = 0; i < dotsArr.length; i++) {
    if (i > stepsNumber) {
      dotsArr[i].classList.add('gallery__dot--hidden');

      if (i > 0) {
        dotsArr[i - 1].classList.add('gallery__dot--last');
      }
    }
  }
}

function changeActiveDot() {
  const prevActiveDot = document.querySelector('.gallery__dot--isactive');

  prevActiveDot.classList.remove('gallery__dot--isactive');

  const currentActiveDot = document
    .querySelector(`.gallery__dot--${currentImage + 1}`);

  currentActiveDot.classList.add('gallery__dot--isactive');
};

function moveImages(direction, stopPoint) {
  let index;

  switch (direction) {
    case 'ahead':
      index = 1;
      break;
    case 'back':
      index = -1;
      break;
    default:
      break;
  }

  if (currentImage === stopPoint) {
    return;
  }

  currentImage += index;

  imagesTranslation = -(currentImage * stepSize);
}

function moveAhead() {
  moveImages('ahead', stepsNumber);
}

function moveBack() {
  moveImages('back', 0);
}

function scrollImages() {
  if (endX < startX) {
    moveAhead();

    changeActiveDot(currentImage);
  }

  if (startX < endX) {
    moveBack();

    changeActiveDot(currentImage);
  }

  galleryImages.style.transform = `translateX(${imagesTranslation}px)`;
};

if (window.screen.width < 1280) {
  setVisibleDots();
  setInvisibleDots();

  galleryImages.addEventListener('touchstart',
    (event) => {
      startX = event.targetTouches[0].clientX;
    });

  galleryImages.addEventListener('touchmove',
    (event) => {
      endX = event.targetTouches[0].clientX;
    });

  galleryImages.addEventListener('touchend', scrollImages);
};
