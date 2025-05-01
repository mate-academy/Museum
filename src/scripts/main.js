'use strict';

const page = document.querySelector('.baseline-menu');
const switcher = document.querySelector('.page__header');
const switcher2 = document.querySelector('.page__main');

function toggleOpacity() {
  page.classList.toggle('baseline-opacity');
  switcher.classList.toggle('page__header--opacity');
  switcher2.classList.toggle('page__main--opacity');
}

const toggleElements = [
  page,
  document.querySelector('.baseline-close--tablet'),
  document.querySelector('.baseline-close--phone'),
  document.querySelector('.page__menu-section--first--element--a-gal'),
  document.querySelector('.page__menu-section--first--element--a-eve'),
  document.querySelector('.page__menu-section--first--element--a-gal-lec'),
  document.querySelector('.page__menu-section--first--element--a-gal-cont')
];

toggleElements.forEach(el => {
  if (el) {
    el.addEventListener('click', toggleOpacity);
  }
});

let currentSlide = 0;
const bullets = document.querySelectorAll('.page__main-section--gallery--slider-buttons--bullet');

function updateSlider(index) {

  bullets.forEach(bullet => bullet.classList.remove('page__main-section--gallery--slider-buttons--bullet-active'));
  bullets[index].classList.add('page__main-section--gallery--slider-buttons--bullet-active');
}


function changeSlide(index) {
  updateSlider(index);
}

