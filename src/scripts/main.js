'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const closeBtn = document.querySelector('.nav__close');
  const navMenu = document.querySelector('.nav');

  closeBtn.addEventListener('click', function() {
    navMenu.classList.remove('nav--open');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const headerBtn = document.querySelector('.header__btn');
  const navMenu = document.querySelector('.nav');

  headerBtn.addEventListener('click', function() {
    navMenu.classList.toggle('nav--open');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const galleryWrapper = document.querySelector('.gallery__wrapper');
  const galleryImages = document.querySelector('.gallery__gallery');
  const galleryButtons = galleryWrapper.querySelectorAll('.gallery__circle');

  galleryButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      const containerWidth = galleryImages.offsetWidth;

      galleryImages.style.transition = 'transform 0.3s ease-in-out';

      galleryImages.style.transform = 'translateX(-'
        + +(containerWidth * index) + 'px)';
    });
  });
});

const emailInput = document.getElementById('emailInput');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  emailInput.value = '';
});
