'use strict';

const carouselSlide = document.querySelector('.carousel-slider');
const carouselImages = document.querySelectorAll('.carousel-slider img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = 340;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listener

nextBtn.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) {
    return;
  };
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) {
    return;
  };
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
