'use strict';

const images = document.querySelectorAll('.slider__img');
const sliderLine = document.querySelector('.slider__line');

let count = 0;
let width;

function init() {
  width = document.querySelector('.slider').offsetWidth;

  if (width >= 1170) {
    sliderLine.style.width = '100%';

    images.forEach(item => {
      item.style.width = 'min-content';
    });
  }

  if (width >= 690 && width < 1170) {
    sliderLine.style.width
      = (width / 2 - 10)
      * images.length + 20
      * (images.length - 1) + 'px';

    images.forEach(item => {
      item.style.width = width / 2 + 'px';
    });
  }

  if (width < 690) {
    sliderLine.style.width = width * images.length + 'px';

    images.forEach(item => {
      item.style.width = width + 'px';
    });
  }
  rollSlider();
}

window.addEventListener('resize', init);
init();

function rightSwipe() {
  count--;

  if (count < 0) {
    if (width >= 690 && width < 1170) {
      count = images.length - 2;
    }

    if (width < 690) {
      count = images.length - 1;
    }
  }
  rollSlider();
  rollButtons();
};

function leftSwipe() {
  count++;

  if (width >= 690 && width < 1170) {
    if (count >= images.length - 1) {
      count = 0;
    }
  }

  if (width < 690) {
    if (count >= images.length) {
      count = 0;
    }
  }
  rollSlider();
  rollButtons();
};

function rollSlider() {
  if (width >= 1170) {
    sliderLine.style.transform = 'translate(0px)';
  }

  if (width >= 690 && width < 1170) {
    sliderLine.style.transform
      = 'translate(-'
      + count
      * (width / 2 + 20)
      + 'px)';
  }

  if (width < 690) {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
  }
}

function rollButtons() {
  document.querySelector('.buttons__button-active').style.left
  = count * 31 + 'px';
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
  const firstTouch = event.touches[0];

  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
  if (!x1 || !y1) {
    return false;
  }

  const x2 = event.touches[0].clientX;
  const y2 = event.touches[0].clientY;
  const xDiff = x2 - x1;
  const yDiff = y2 - y1;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    // r-l
    if (xDiff > 0) {
      rightSwipe();
    } else {
      leftSwipe();
    }
  } else {
    // t-b
  }
  x1 = null;
  y1 = null;
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--width-menu');
  } else {
    document.body.classList.remove('page__body--width-menu');
  }
});
