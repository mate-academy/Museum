'use strict';

const slider = document.querySelector('.slider__container');
const dots = document.querySelectorAll('.slider__nav--dot');
let slideIndex = 0;

function showSlides() {
  slider.style.transform = `translateX(-${slideIndex * 25}%)`;

  dots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add('slider__nav--dot--active');
    } else {
      dot.classList.remove('slider__nav--dot--active');
    }
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index;
    showSlides();
  });
});

window.addEventListener('hashchange', () => {
  window.location.hash === '#menu'
    ? document.body.classList.add('page__body--with-menu')
    : document.body.classList.remove('page__body--with-menu');
});

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
