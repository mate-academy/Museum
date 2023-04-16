'use strict';

let slideIndex = 1;

showSlides(slideIndex);

const dots = document.querySelectorAll('.slider__dot');

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', function() {
    currentSlide(i + 1);
  });
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll('.slider__element--none');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}
