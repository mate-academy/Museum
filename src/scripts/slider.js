'use strict';

let imageno = 1;

displayimg(imageno);

const dot1 = document.querySelector('.slider__nav--dot--1');
const dot2 = document.querySelector('.slider__nav--dot--2');
const dot3 = document.querySelector('.slider__nav--dot--3');
const dot4 = document.querySelector('.slider__nav--dot--4');

dot1.addEventListener('click', function() {
  currentSlide(1);
});

dot2.addEventListener('click', function() {
  currentSlide(2);
});

dot3.addEventListener('click', function() {
  currentSlide(3);
});

dot4.addEventListener('click', function() {
  currentSlide(4);
});

function currentSlide(n) {
  displayimg(imageno = n);
}

function displayimg(n) {
  let i;
  const image = document.getElementsByClassName('slide');
  const dots = document.getElementsByClassName('slider__nav--dot');

  if (n > image.length) {
    imageno = 1;
  }

  if (n < 1) {
    imageno = image.length;
  }

  for (i = 0; i < image.length; i++) {
    image[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  image[imageno - 1].style.display = 'block';
  dots[imageno - 1].className += ' active';
}
