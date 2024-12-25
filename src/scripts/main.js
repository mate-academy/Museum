'use strict';

const form = document.querySelector('.subscription__form');

document.querySelector('.menu__dark')
  .addEventListener('click', function() {
    window.location.hash = '';
  });

form.addEventListener('submit', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
  form.reset();
};

const galleryContent = document.querySelector('.gallery__slides-content');
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

function handleTouchStart(e) {
  startX = e.touches[0].clientX;
}

function handleTouchMove(e) {
  const currentX = e.touches[0].clientX;
  const diff = currentX - startX;

  galleryContent.style.transform = `translateX(${currentTranslate + diff}px)`;
}

function handleTouchEnd(e) {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (diff < -50) {
    moveToNextSlide();
  }

  if (diff > 50) {
    moveToPreviousSlide();
  }

  galleryContent.style.transform = '';
}

function moveToNextSlide() {
  const activeInput = document.querySelector('.gallery__input:checked');
  const nextInput = activeInput.nextElementSibling;
  if (nextInput) nextInput.checked = true;
}

function moveToPreviousSlide() {
  const activeInput = document.querySelector('.gallery__input:checked');
  const prevInput = activeInput.previousElementSibling;
  if (prevInput) prevInput.checked = true;
}

function enableTouchEvents() {
  galleryContent.addEventListener('touchstart', handleTouchStart);
  galleryContent.addEventListener('touchmove', handleTouchMove);
  galleryContent.addEventListener('touchend', handleTouchEnd);
}

function disableTouchEvents() {
  galleryContent.removeEventListener('touchstart', handleTouchStart);
  galleryContent.removeEventListener('touchmove', handleTouchMove);
  galleryContent.removeEventListener('touchend', handleTouchEnd);
}

function checkViewportWidth() {
  if (window.innerWidth <= 1280) {
    enableTouchEvents();
  } else {
    disableTouchEvents();
  }
}

checkViewportWidth();
window.addEventListener('resize', checkViewportWidth);
