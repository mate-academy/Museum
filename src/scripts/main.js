'use strict';

// #region ***Form***
document.querySelector('.about__email').addEventListener('submit', e => {
  e.preventDefault();
  document.querySelector('.about__email').reset();
});
// #endregion

// #region ***Menu***
const menu = document.getElementById('menu');

menu.addEventListener('click', function(e) {
  if (document.getElementById('menu__container').contains(e.target)) {

  } else {
    document.getElementById('close-menu').click();
  }
});// close menu if click outside of block

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});// disable page scrolling under the menu
// #endregion

// #region ***SLIDER***
let offset = 0;
const sliderLine = document.querySelector('.slider__line');
const galerySection = document.querySelector('.galery');

galerySection.addEventListener('touchstart', handleTouchStart, false);
galerySection.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;
let y1 = null;

// SLIDER TABLET VERSION
const mediaQueryTablet = window.matchMedia('(min-width: 768px)');

if (mediaQueryTablet.matches) {
  for (let i = 1; i <= 4; i++) {
    document.querySelector('.slider__btns--btn' + i)
      .addEventListener('click', function() {
        document.querySelectorAll('.slider__btns--btn').forEach((item) => {
          item.style.backgroundColor = '#e0e0e0';
        });

        document.querySelector('.slider__btns--btn' + i)
          .style.backgroundColor = '#1a5a4c';

        if (i === 2) {
          offset = 52;
        } else if (i === 3) {
          offset = 104;
        } else {
          offset = 0;
        }
        sliderLine.style.right = offset + '%';
      });
  }
}// slide by buttons

function handleTouchStart(event) {
  const firstTouch = event.touches[0];

  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;
};

function handleTouchMove(event) {
  if (mediaQueryTablet.matches) {
    if (!x1) {
      return false;
    }

    const x2 = event.touches[0].clientX;
    const y2 = event.touches[0].clientY;

    const xDiff = x2 - x1;
    const yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      document.body.classList.add('page__body--with-galery');

      if (x1 < x2) {
        offset -= 52;
      } else {
        offset += 52;
      }

      if (offset === 52) {
        document.querySelectorAll('.slider__btns--btn').forEach((item) => {
          item.style.backgroundColor = '#e0e0e0';
        });

        document.querySelector('.slider__btns--btn2')
          .style.backgroundColor = '#1a5a4c';
      }

      if (offset === 104) {
        document.querySelectorAll('.slider__btns--btn').forEach((item) => {
          item.style.backgroundColor = '#e0e0e0';
        });

        document.querySelector('.slider__btns--btn3')
          .style.backgroundColor = '#1a5a4c';
      }

      if (offset === 156 || offset === 0 || offset === -52) {
        document.querySelectorAll('.slider__btns--btn').forEach((item) => {
          item.style.backgroundColor = '#e0e0e0';
        });

        document.querySelector('.slider__btns--btn1')
          .style.backgroundColor = '#1a5a4c';
      }

      if (offset < 0 || offset > 104) {
        offset = 0;
      }
      sliderLine.style.right = offset + '%';
    } else {
      document.body.classList.remove('page__body--with-galery');
    }

    x1 = null;
    y1 = null;
  }
};// slide by touches

// SLIDER MOBILE VERSION
const mediaQueryMobile = window.matchMedia('(max-width: 767px)');

galerySection.addEventListener('touchmove', handleTouchMoveMob, false);

function handleTouchMoveMob(event) {
  if (mediaQueryMobile.matches) {
    if (!x1 || !y1) {
      return false;
    }

    const x2 = event.touches[0].clientX;
    const y2 = event.touches[0].clientY;

    const xDiff = x2 - x1;
    const yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      document.body.classList.add('page__body--with-galery');

      if (x1 < x2) {
        offset -= 104;
      } else {
        offset += 104;
      }

      if (offset === 104) {
        document.querySelectorAll('.slider__btns--btn').forEach((item) => {
          item.style.backgroundColor = '#e0e0e0';
        });

        document.querySelector('.slider__btns--btn2')
          .style.backgroundColor = '#1a5a4c';
      }

      if (offset === 208) {
        document.querySelectorAll('.slider__btns--btn').forEach((item) => {
          item.style.backgroundColor = '#e0e0e0';
        });

        document.querySelector('.slider__btns--btn3')
          .style.backgroundColor = '#1a5a4c';
      }

      if (offset === 312) {
        document.querySelectorAll('.slider__btns--btn').forEach((item) => {
          item.style.backgroundColor = '#e0e0e0';
        });

        document.querySelector('.slider__btns--btn4')
          .style.backgroundColor = '#1a5a4c';
      }

      if (offset === 416 || offset === 0 || offset === -104) {
        document.querySelectorAll('.slider__btns--btn').forEach((item) => {
          item.style.backgroundColor = '#e0e0e0';
        });

        document.querySelector('.slider__btns--btn1')
          .style.backgroundColor = '#1a5a4c';
      }

      if (offset < 0 || offset > 312) {
        offset = 0;
      }
      sliderLine.style.right = offset + '%';
    } else if (Math.abs(xDiff) === 0) {
      document.body.classList.remove('page__body--with-galery');
    }

    x1 = null;
    y1 = null;
  }
};
// #endregion
