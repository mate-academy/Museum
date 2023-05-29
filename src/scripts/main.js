'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

let slideIndex = 1;

currentSlide(slideIndex);

function currentSlide(n) {
  // let i;
  const slides = document.getElementsByClassName('gallery__mySlides');
  const dots = document.getElementsByClassName('gallery__dot');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let b = 0; b < slides.length; b++) {
    slides[b].style.display = 'none';
  }

  for (let j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
