'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page--with-nav');
  } else {
    document.body.classList.remove('page--with-nav');
  }
});

const sliderWrapper = document.querySelector('.slider__wrapper');

for (let i = 1; i <= 4; i++) {
  const point = document.querySelector(`.slider__point--${i}`);
  const translate = 25 * i - 25;

  point.addEventListener('click', () => {
    sliderWrapper.style.transform = `translateX(-${translate}%)`;
  });
}

const form = document.querySelector('.subscription__form');

function stopRefreshing(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', stopRefreshing);

// document.addEventListener('touchstart', handleTouchStart, false);
// document.addEventListener('touchmove', handleTouchMove, false);

// let x1 = null;

// function handleTouchStart(event) {
//   const firstTouch = event.touches[0];
//   x1 = firstTouch.clientX;
// }

// function handleTouchMove(event) {
//   if (!x1) {
//     return false;
//   }
//   let x2 = event.touches[0].clientX;
//   let xDiff = x2 - x1;

//   if (xDiff > 50) {

//   }
//   if (xDiff < -50) {

//   }
//   x1 = null;
// }
