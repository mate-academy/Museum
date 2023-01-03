'use strict';

// const { render } = require("node-sass");

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const mediaQueryTablet = window.matchMedia('(min-width: 768px)');

// if (mediaQueryTablet.matches) {
// SLIDER TABLET VERSION
let offset = 0;
const sliderLine = document.querySelector('.slider__line');

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
} // slide by buttons

const galerySection = document.querySelector('.galery');

galerySection.addEventListener('touchstart', handleTouchStart, false);
galerySection.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;

function handleTouchStart(event) {
  const firstTouch = event.touches[0];

  x1 = firstTouch.clientX;
};

function handleTouchMove(event) {
  if (mediaQueryTablet.matches) {
    if (!x1) {
      return false;
    }

    const x2 = event.touches[0].clientX;

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

    x1 = null;
  }
};// slide by touches
// }

// SLIDER MOBILE VERSION
const mediaQueryMobile = window.matchMedia('(max-width: 767px)');

// if (mediaQueryMobile.matches) {
// // slide by touches on Mobile
// }

// let offset = 0;
// const sliderLine = document.querySelector('.slider__line');

// const galerySection = document.querySelector('.galery');

// galerySection.addEventListener('touchstart', handleTouchStart, false);
galerySection.addEventListener('touchmove', handleTouchMoveMob, false);

// let x1 = null;

// function handleTouchStart(event) {
//   const firstTouch = event.touches[0];

//   x1 = firstTouch.clientX;
// };

function handleTouchMoveMob(event) {
  if (mediaQueryMobile.matches) {
    if (!x1) {
      return false;
    }

    const x2 = event.touches[0].clientX;

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

    x1 = null;
  }
};

// if (mediaQueryMobile.matches) {
//   let offset = 0;
//   const sliderLine = document.querySelector('.slider__line');

//   const galerySection = document.querySelector('.galery');

//   galerySection.addEventListener('touchstart', handleTouchStart, false);
//   galerySection.addEventListener('touchmove', handleTouchMove, false);

//   let x1 = null;

//   function handleTouchStart(event) {
//     const firstTouch = event.touches[0];

//     x1 = firstTouch.clientX;
//   };

//   function handleTouchMove(event) {
//     if (!x1) {
//       return false;
//     }

//     const x2 = event.touches[0].clientX;

//     if (x1 < x2) {
//       offset -= 104;
//     } else {
//       offset += 104;
//     }

//     if (offset === 104) {
//       document.querySelectorAll('.slider__btns--btn').forEach((item) => {
//         item.style.backgroundColor = '#e0e0e0';
//       });

//       document.querySelector('.slider__btns--btn2')
//         .style.backgroundColor = '#1a5a4c';
//     }

//     if (offset === 208) {
//       document.querySelectorAll('.slider__btns--btn').forEach((item) => {
//         item.style.backgroundColor = '#e0e0e0';
//       });

//       document.querySelector('.slider__btns--btn3')
//         .style.backgroundColor = '#1a5a4c';
//     }

//     if (offset === 312) {
//       document.querySelectorAll('.slider__btns--btn').forEach((item) => {
//         item.style.backgroundColor = '#e0e0e0';
//       });

//       document.querySelector('.slider__btns--btn4')
//         .style.backgroundColor = '#1a5a4c';
//     }

//     if (offset === 416 || offset === 0 || offset === -104) {
//       document.querySelectorAll('.slider__btns--btn').forEach((item) => {
//         item.style.backgroundColor = '#e0e0e0';
//       });

//       document.querySelector('.slider__btns--btn1')
//         .style.backgroundColor = '#1a5a4c';
//     }

//     if (offset < 0 || offset > 312) {
//       offset = 0;
//     }
//     sliderLine.style.right = offset + '%';

//     x1 = null;
//   };// slide by touches on Mobile
// }
