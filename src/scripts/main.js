'use strict';
const burgerButton = document.querySelector('.top-bar__burger');
const closeButton = document.querySelector('.aside__close-button-link');
const aside = document.querySelector('.aside');
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const overlay = document.querySelector('.overlay');
const asideLinks = document.querySelectorAll('.aside a');

burgerButton.addEventListener('click', () => {
  aside.classList.add('aside--visible');
  overlay.classList.add('overlay--visible');
});

closeButton.addEventListener('click', () => {
  aside.classList.remove('aside--visible');
  overlay.classList.remove('overlay--visible');
});
overlay.addEventListener('click', () => {
  aside.classList.remove('aside--visible');
  overlay.classList.remove('overlay--visible');
});
asideLinks.forEach((link) => {
  link.addEventListener('click', () => {
    aside.classList.remove('aside--visible');
    overlay.classList.remove('overlay--visible');
  });
});
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slides.style.transform = `translateX(-${index * 25}%)`;

    dots.forEach((d) => d.classList.remove('active'));
    dot.classList.add('active');
  });
});
