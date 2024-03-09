'use strict';

const dots = document.querySelectorAll('.slider__item');
/* global alert */

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', () => {
    alert('The feature is still under development');
  });
}
