'use strict';

const sliderContent = document.querySelector('.slider__slides');
const slidesPhoto = document.querySelectorAll('.slider__photo');

let isSliderActive = false;
let currentIndex = 0;

const dots = document.querySelectorAll('.slider__dot');

const totalSlides = slidesPhoto.length;

function changeSlide(direction) {
  let oldIndex = currentIndex;
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  updateVisibleSlides(direction);
  updateDots(oldIndex, currentIndex);
}

function updateVisibleSlides() {
  slidesPhoto.forEach((slide) =>
    slide.classList.remove(
      'slider__photo--active',
      'slider__photo--order-1',
      'slider__photo--order-2',
    ),
  );

  slidesPhoto[currentIndex].classList.add(
    'slider__photo--active',
    'slider__photo--order-1',
  );
  const isTablet = window.innerWidth >= 768;
  console.log(isTablet);
  if (isTablet) {
    const secondIndex = (currentIndex + 1) % totalSlides;
    slidesPhoto[secondIndex].classList.add(
      'slider__photo--active',
      'slider__photo--order-2',
    );
  }
}

function updateDots(oldIndex, newIndex) {
  dots[oldIndex].classList.remove('slider__dot--active');
  dots[newIndex].classList.add('slider__dot--active');
}

let startX = 0;
let endX = 0;

function handleTouchStart(e) {
  startX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
  endX = e.changedTouches[0].clientX;
  const delta = endX - startX;

  if (Math.abs(delta) > 50) {
    if (delta < 0) {
      changeSlide(1);
    } else {
      changeSlide(-1);
    }
  }
}

function initSlider() {
  if (isSliderActive) {
    updateVisibleSlides();
    updateDots(0, currentIndex);
    return;
  }
  isSliderActive = true;

  sliderContent.addEventListener('touchstart', handleTouchStart);

  sliderContent.addEventListener('touchend', handleTouchEnd);
  updateVisibleSlides();
  updateDots(0, currentIndex);
}

function destroySlider() {
  if (!isSliderActive) return;
  isSliderActive = false;

  sliderContent.removeEventListener('touchstart', handleTouchStart);
  sliderContent.removeEventListener('touchend', handleTouchEnd);

  slidesPhoto.forEach((slide) =>
    slide.classList.remove(
      'slider__photo--active',
      'slider__photo--order-1',
      'slider__photo--order-2',
    ),
  );
}

function checkSliderStatus() {
  if (window.innerWidth < 1280) {
    console.log('init');
    initSlider();
  } else {
    console.log('destroy');
    destroySlider();
  }
}

window.addEventListener('resize', checkSliderStatus);
window.addEventListener('load', checkSliderStatus);
