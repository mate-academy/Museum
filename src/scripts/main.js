'use strict';

const navButtonsBlock = document.querySelector('.gallery__nav-buttons-box');
const galleryItems = [...document.querySelectorAll('.slider-item')];
const navButtons = [...document.querySelectorAll('.nav-button-item')];

navButtonsBlock.addEventListener('click', (event) => {
  if (navButtons.indexOf(event.target) < 0) {
    return;
  }

  const nextButton = navButtons[navButtons.indexOf(event.target)];
  const nextImage = galleryItems[navButtons.indexOf(event.target)];

  const currentButton = navButtons.find(
    el => el.classList.contains('active'));

  const currentImage = galleryItems.find(
    el => !el.classList.contains('hiden'));

  currentButton.classList.remove('active');
  currentImage.classList.add('hiden');

  nextImage.classList.remove('hiden');
  nextButton.classList.add('active');
});
