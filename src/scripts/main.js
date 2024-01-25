'use strict';

function currentSlide(slideNumber) {
  const dots = document.getElementsByClassName('gallery__dot');

  const currentSlideElement = document.querySelector(
    '.gallery__photo-container a.active',
  );
  const currentDot = document.querySelector(
    '.gallery__dot.gallery__dot--active',
  );

  if (currentSlideElement) {
    currentSlideElement.classList.remove('active');
  }

  if (currentDot) {
    currentDot.classList.remove('gallery__dot--active');
  }

  const selectedImage = document.getElementById('slide' + slideNumber);

  if (selectedImage) {
    const container = selectedImage.closest('.gallery__photo-container');

    if (container) {
      const translateValue = -(
        selectedImage.offsetLeft - container.firstElementChild.offsetLeft);

      container.style.transform = `translateX(${translateValue}px)`;
    }

    selectedImage.classList.add('active');
    dots[slideNumber - 1].classList.add('gallery__dot--active');
  }
}
currentSlide(1);

document.querySelector('.gallery__dot--1').addEventListener('click', () => {
  currentSlide(1);
});

document.querySelector('.gallery__dot--2').addEventListener('click', () => {
  currentSlide(2);
});

document.querySelector('.gallery__dot--3').addEventListener('click', () => {
  currentSlide(3);
});

document.querySelector('.gallery__dot--4').addEventListener('click', () => {
  currentSlide(4);
});
