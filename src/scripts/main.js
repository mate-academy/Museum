'use strict';

let slideIndex = 1;

showSlides(slideIndex);

// eslint-disable-next-line no-unused-vars
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('gallery-slide');
  const dots = document.getElementsByClassName('gallery__dot');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'inline-block';
  slides[slideIndex].style.display = 'inline-block';
  dots[slideIndex].className += ' active';
}
