'use strict';

const form = document.getElementById('email-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});

const gallery = document.querySelectorAll('.carousel__item');
const scrollPoints = document.querySelectorAll('[data-scroll-point');
const scrollPointsContainer = document.querySelectorAll(
  '.scroll__point-container'
);
const numbersForSlider = [1, 2, 3, 4, 5];
let currentPoint = 0;

function togglePointActiveClass(current) {
  scrollPoints.forEach(point => {
    if (point.classList.contains('scroll__point')) {
      point.classList.toggle(
        'scroll__point--active', +current === +point.dataset.scrollPoint
      );
    }
  });
};

function rotateImages(point) {
  let copyNumbersForSlider = [...numbersForSlider];

  copyNumbersForSlider
  = [...copyNumbersForSlider.splice(-point), ...copyNumbersForSlider];

  gallery.forEach(img => {
    for (let i = 1; i <= 5; i++) {
      img.classList.remove(`carousel__item--${i}`);
    }
  });

  gallery.forEach((img, i) => {
    img.classList.add(`carousel__item--${copyNumbersForSlider[i]}`);
  });
}

function handleClickOnImage() {
  gallery.forEach(img => {
    img.addEventListener('click', event => {
      // console.log(event.target.dataset.scrollPoint)
      currentPoint = event.target.dataset.scrollPoint;
      rotateImages(currentPoint);
      togglePointActiveClass(currentPoint);
    });
  });
}

function handleClickOnPoint() {
  scrollPointsContainer.forEach(point => {
    point.addEventListener('click', (event) => {
      currentPoint = event.currentTarget.firstElementChild.dataset.scrollPoint;
      togglePointActiveClass(currentPoint);
      rotateImages(currentPoint);
    });
  });
}

function handleSwipe() {
  const carousel = document.querySelector('.carousel');
  let startTouch;
  let endTouch;

  carousel.addEventListener('touchstart', event => {
    startTouch = event.touches[0].clientX;
  });

  carousel.addEventListener('touchend', event => {
    endTouch = event.changedTouches[0].clientX;

    if (startTouch - endTouch > 0) {
      currentPoint = +currentPoint + 1;
      rotateImages(currentPoint);
      currentPoint = currentPoint === 5 ? 0 : currentPoint;
      togglePointActiveClass(currentPoint);
    }

    if (startTouch - endTouch < 0) {
      currentPoint -= 1;
      rotateImages(currentPoint);
      currentPoint = currentPoint === -1 ? 4 : currentPoint;
      togglePointActiveClass(currentPoint);
    }
  });
};

const carouselItem5 = document.querySelector('.carousel__item--5');

if (window.innerWidth >= 1280) {
  carouselItem5.setAttribute('hidden', true);
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1280) {
    carouselItem5.setAttribute('hidden', true);
  } else {
    carouselItem5.removeAttribute('hidden');
  }
});

handleSwipe();
handleClickOnImage();
handleClickOnPoint();
