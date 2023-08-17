'use strict';

const slider = document.querySelector('.gallery__slider');
const circles = document.querySelectorAll('.gallery__circle');

circles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    const activeCircle = document.querySelector('.gallery__circle--active');

    activeCircle.classList.remove('gallery__circle--active');
    circle.classList.add('gallery__circle--active');

    slider.style.transform = `translate(${index * -25}%)`;
  });
});

const form = document.querySelector('.subscribe__form');

form.addEventListener('submit', event => {
  event.preventDefault();
  form.reset();
});
