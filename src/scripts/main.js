'use strict';
const burgerButton = document.querySelector('.top-bar__burger');
const closeButton = document.querySelector('.aside__close-button-link');
const aside = document.querySelector('.aside');
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

burgerButton.addEventListener('click', () => {
  aside.classList.add('aside--visible');
});

closeButton.addEventListener('click', () => {
  aside.classList.remove('aside--visible');
});
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slides.style.transform = `translateX(-${index * 25}%)`;


    dots.forEach((d) => d.classList.remove('active'));
    dot.classList.add('active');
  });
});
