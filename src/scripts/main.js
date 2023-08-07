'use strict';

let slideIndex = 1;

currentSlide(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const windowSize = window.screen.width;
  const slide = document.getElementsByClassName('slides__wrapper');
  const dots = document.getElementsByClassName('slides__dot');

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  if (windowSize < 768) {
    if (n === 1) {
      slide[0].style.left = '0';
      dots[0].className += ' active';
    }

    if (n === 2) {
      slide[0].style.left = '-296px';
      dots[1].className += ' active';
    }

    if (n === 3) {
      slide[0].style.left = '-592px';
      dots[2].className += ' active';
    }

    if (n === 4) {
      slide[0].style.left = '-888px';
      dots[3].className += ' active';
    }
  } else if (windowSize < 1280) {
    if (n === 1) {
      slide[0].style.left = '0';
      dots[0].className += ' active';
    }

    if (n === 2) {
      slide[0].style.left = '-356px';
      dots[1].className += ' active';
    }

    if (n === 3) {
      slide[0].style.left = '-712px';
      dots[2].className += ' active';
    }

    if (n === 4) {
      slide[0].style.left = '-1068px';
      dots[3].className += ' active';
    }
  }
}
