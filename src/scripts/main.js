'use strict';

const slides = document.querySelectorAll('.slide-image');
const bottom = document.querySelector('.gallery__slider');

let currentIndex = 0;
const pagCircles = [];

let touchStartX = 0;
let touchEndX = 0;

function createPagCircle() {
  const div = document.createElement('div');

  div.className = 'pagination-circle';
  bottom.appendChild(div);
  pagCircles.push(div);
}

function addPag() {
  slides.forEach(createPagCircle);
  pagCircles[0].classList.add('active');

  pagCircles.forEach((circle, index) => {
    circle.addEventListener('click', () => changeSlide(index));
  });
}

function addActiveClass() {
  pagCircles[currentIndex].classList.add('active');
}

function removeActiveClass() {
  pagCircles[currentIndex].classList.remove('active');
}

function showSlide() {
  slides[currentIndex].classList.add('block');
}

function hideSlide() {
  slides[currentIndex].classList.remove('block');
}

function changeSlide(slideIndex) {
  hideSlide();
  removeActiveClass();
  currentIndex = slideIndex;
  addActiveClass();
  showSlide();
}

function nextSlide() {
  let newSlideIndex = currentIndex + 1;

  if (newSlideIndex > slides.length - 1) {
    newSlideIndex = 0;
  }

  changeSlide(newSlideIndex);
}

function previousSlide() {
  let newSlideIndex = currentIndex - 1;

  if (newSlideIndex < 0) {
    newSlideIndex = slides.length - 1;
  }

  changeSlide(newSlideIndex);
}

addPag();

function handleGesture() {
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) < 50) return;

  if (diff > 0) {
    nextSlide();
  } else {
    previousSlide();
  }
}

slides.forEach((slide) => {
  slide.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  slide.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  });
});
