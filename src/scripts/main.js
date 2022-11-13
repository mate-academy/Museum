'use strict';

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});

const list = document.querySelector('.nav__menu-list');

list.addEventListener('mouseover', (event) => {
  const link = event.target.closest('.nav__link');

  if (!link || !list.contains(link)) {
    return;
  }

  link.classList.add('nav__link-color');
});

const sliderToggle = document.querySelectorAll('.gallery__toggle');
const sliderImage = document.querySelector('.gallery__images');
const sliderChildren = sliderImage.children.length;

for (let i = 0; i < sliderChildren; i++) {
  sliderToggle[i].addEventListener('click', () => {
    sliderImage.style.transform = `translateX(${(-i) * 100}%)`;
  });
}
