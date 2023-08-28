'use strict';

const slides = document.querySelectorAll('.gallery__image--mobile');
const dots = document.querySelectorAll('.gallery__dot');

showSlides(0);

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', () => {
    showSlides(i);
  });
}

function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add('gallery__image--hide');
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('gallery__dot--active');
  }

  slides[n].classList.remove('gallery__image--hide');
  dots[n].classList.add('gallery__dot--active');

  if (document.body.clientWidth >= 640) {
    slides[n + 1].classList.remove('gallery__image--hide');
    dots[n].classList.add('gallery__dot--active');
  }
}
