'use strict';

const isTablet = window.innerWidth >= 768;
const menu = document.querySelector('.menu');
const menuOpener = document.querySelector('.header__menu-opener');
const menuCross = document.querySelector('.menu__cross');
const menuLinks = document.querySelectorAll('.menu__nav .nav-link');
const form = document.querySelector('.subscribe__form');
const slider = document.querySelector('.slider');
const slidesContainer = document.querySelector('.slider__slides');
const slidesCount = document.querySelectorAll('.slider__slide').length;
const slidesIndicatorsContainer = document.querySelector('.slider__indicators');
const slidesIndicators = [];
const translateXStep = 100 / slidesCount;
let activeSlide = 0;
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

for (let i = 0; i < slidesCount; i++) {
  const slideIndicator = document.createElement('div');

  slideIndicator.classList.add('slider__indicator');
  slidesIndicatorsContainer.appendChild(slideIndicator);
  slidesIndicators.push(slideIndicator);
}

const closeMenu = () => {
  menu.classList.remove('menu--open');
  document.body.classList.remove('page__body--dark');
};

const colorActiveSlideIndicator = () => {
  slidesIndicators[activeSlide].classList.add('slider__indicator--active');

  if (isTablet && slidesCount > 1) {
    slidesIndicators[activeSlide + 1].classList
      .add('slider__indicator--active');
  }
};

const moveSlides = (direction) => {
  if (direction !== 'left' && direction !== 'right') {
    return;
  };

  slidesIndicators[activeSlide].classList.remove('slider__indicator--active');

  if (isTablet && slidesCount > 1) {
    slidesIndicators[activeSlide + 1].classList
      .remove('slider__indicator--active');
  }

  direction === 'left' ? activeSlide++ : activeSlide--;

  slidesContainer.style.transform = `
    translateX(-${translateXStep * activeSlide}%)
  `;

  colorActiveSlideIndicator();
};

colorActiveSlideIndicator();

menuOpener.addEventListener('click', () => {
  menu.classList.add('menu--open');
  document.body.classList.add('page__body--dark');
});

menuCross.addEventListener('click', closeMenu);

menuLinks.forEach(item => item.addEventListener('click', closeMenu));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

slider.addEventListener('touchstart', (e) => {
  startX = e.changedTouches[0].clientX;
  startY = e.changedTouches[0].clientY;
});

slider.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  endY = e.changedTouches[0].clientY;

  if (Math.abs(startX - endX) > Math.abs(startY - endY)) {
    if (startX > endX) {
      if (isTablet && activeSlide < slidesCount - 2) {
        moveSlides('left');
      }

      if (!isTablet && activeSlide < slidesCount - 1) {
        moveSlides('left');
      }
    }

    if (startX < endX && activeSlide > 0) {
      moveSlides('right');
    }
  }
});
