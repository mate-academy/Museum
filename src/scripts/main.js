'use strict';

const page = document.querySelector('.page');
const toggle = document.getElementById('nav__toggle');
const listLinks = document.querySelectorAll('.menu-list__link');

toggle.addEventListener('change', function() {
  if (toggle.checked === true) {
    page.classList.add('page--disabled');
  } else {
    page.classList.remove('page--disabled');
  }
});

listLinks.forEach(listLink =>
  listLink.addEventListener('click', function() {
    page.classList.remove('page--disabled');
    toggle.checked = false;
  })
);

const sliderToggle = document.querySelectorAll('.gallery-slider__toggle');
const slider = document.querySelector('.gallery-slider__images');
const sliderCount = slider.children.length;

for (let i = 0; i < sliderCount; i++) {
  sliderToggle[i].addEventListener('click', function() {
    slider.style.transform = `translateX(${(-i) * 100}%)`;
  });
}

const sliderWidth = slider.clientWidth;
const sliderGenaralWidth = slider.scrollWidth;
const sliderContainer = document.querySelector('.gallery-slider');
const containerWidth = sliderContainer.clientWidth;

for (let i = 0; i < sliderCount; i++) {
  if (containerWidth > getCurrentWidth(i)) {
    sliderToggle[i].addEventListener('click', function() {
      slider.style.alignSelf = 'flex-end';
    });
  } else {
    sliderToggle[i].addEventListener('click', function() {
      slider.style.alignSelf = 'flex-start';
    });
  }
}

function getCurrentWidth(el) {
  const currentWidth = sliderGenaralWidth - el * sliderWidth;

  return currentWidth;
}

const form = document.querySelector('.subscription__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
