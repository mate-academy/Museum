'use strict';

const slider = document.querySelector('.slider__container');
const slidesArray = Array.from(document.querySelectorAll('.slider__item'));
const sliderWidth = slider.offsetWidth;
const slideWidth = sliderWidth / slidesArray.length;
const sliderWindow = document.querySelector('.slider__window');
const maxLeftShift = sliderWidth - sliderWindow.offsetWidth;
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));

sliderWindow.addEventListener('touchstart', handleTouchStart, false);
sliderWindow.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;

let leftPos = 0;

const minDistanceForSwipe = slider.offsetWidth * 0.2;

function handleTouchStart(event) {
  const firstTouch = event.touches[0];

  x1 = firstTouch.clientX;
}

function handleTouchMove(event) {
  if (!x1) {
    return false;
  }

  const x2 = event.touches[0].clientX;

  const xDiff = x2 - x1;

  if (xDiff < 0 && -xDiff >= -minDistanceForSwipe) {
    leftPos -= slideWidth;

    const nextStep = leftPos - slideWidth;

    slider.style.left
      = nextStep < -maxLeftShift ? -maxLeftShift + 'px' : leftPos + 'px';

    switcher(parseInt(slider.style.left));

    x1 = null;
  }

  if (xDiff > 0 && xDiff >= minDistanceForSwipe) {
    leftPos += slideWidth;

    const nextStep = leftPos + slideWidth;

    slider.style.left = nextStep > 0 ? 0 : leftPos + 'px';
    switcher(parseInt(slider.style.left));

    x1 = null;
  }
}

function switcher(shift) {
  const number = shift.toString().slice(1);

  const index = Math.ceil((number / slideWidth) + 1);

  sliderDots.map(slide => {
    if (slide.classList.contains(index.toString())) {
      slide.classList.add('slider__dot--active');
    } else {
      slide.classList.remove('slider__dot--active');
    }
  });
}
