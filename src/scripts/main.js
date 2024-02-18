'use strict';

let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('gallery-slide');
  const dots = document.getElementsByClassName('gallery__dot');

  if (n >= slides.length) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = slides[i].style.display.replace('active', 'none');
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex].style.display = 'block';
  slides[slideIndex - 1].style.display = 'block';

  dots[slideIndex].className += ' active';
}

// eslint-disable-next-line no-unused-vars
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// eslint-disable-next-line no-unused-vars
function currentSlide(n) {
  showSlides(slideIndex = n);
}
