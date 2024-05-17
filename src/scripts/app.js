/* eslint-disable no-console */
const slider = document.querySelector('.gallery__slider');
const slides = Array.from(document.querySelectorAll('.gallery__item'));
const sliderWidth = document.querySelector('.gallery__slider').offsetWidth;
const dotsContainer = document.querySelector('.slider__dots');

let orderIndex = 0;
let currentTranslate = 0;
let startPosition = 0;
let endPosition = 0;
// offset within which the slide will not change
const misstep = 50;
let positionsDifference = 0;
let isDragging = false;

const gapSmall = 16;
const gapBig = 20;
const tabletMinWidth = 768;
const desktopMinWidth = 1280;

const numberOfSlides = slides.length;
const isMobileScreen = window.innerWidth < tabletMinWidth;
const isDesktopScreen = window.innerWidth >= desktopMinWidth;
const currentPadding = isMobileScreen ? gapSmall : gapBig;
const slideWidth = sliderWidth + currentPadding;
const maxTranslate = -(numberOfSlides - 1) * slideWidth;

if (isDesktopScreen) {
  slider.classList.add('gallery__list');
  slider.classList.remove('gallery__slider', 'slider');
} else {
  slider.addEventListener('touchstart', touchStart, { passive: true });
  slider.addEventListener('touchend', touchEnd, { passive: true });
  slider.addEventListener('touchmove', touchMove, { passive: true });
}

// create slider control buttons (dots)
slides.forEach((item, index) => {
  const btn = document.createElement('button');

  btn.addEventListener('click', () => {
    orderIndex = index;

    setDotClasses();
    setSliderPosition();
  });

  btn.classList.add('slider__dot');

  if (orderIndex === index) {
    btn.classList.add('slider__dot--active');
  }

  dotsContainer.appendChild(btn);
});

function setDotClasses() {
  const btns = Array.from(document.querySelectorAll('.slider__dot'));

  btns.forEach((item, index) => {
    if (orderIndex === index) {
      item.classList.add('slider__dot--active');
    }

    if (orderIndex !== index) {
      item.classList.remove('slider__dot--active');
    }
  });
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function setSliderPosition() {
  if (positionsDifference > 0 && currentTranslate !== maxTranslate) {
    orderIndex++;
    positionsDifference = 0;
  }

  if (positionsDifference < 0 && currentTranslate !== 0) {
    orderIndex--;
    positionsDifference = 0;
  }

  currentTranslate = -slideWidth * orderIndex;

  setDotClasses();

  slider.style.transform = `translateX(${currentTranslate}px)`;
}

function touchStart(event) {
  isDragging = true;
  startPosition = getPositionX(event);
}

function touchMove(event) {
  if (isDragging) {
    endPosition = getPositionX(event);
  }
}

function touchEnd(event) {
  positionsDifference = startPosition - endPosition;

  if (positionsDifference < misstep && positionsDifference > -misstep) {
    return;
  }

  setSliderPosition();
  isDragging = false;
}
