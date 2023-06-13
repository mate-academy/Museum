'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  document.querySelector('form').reset();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const slides = document.querySelectorAll('.galary__image-wrapper');
const dots = document.querySelectorAll('.slider__dot');
let index = 0;

const activeSlide = n => {
  for (const slide of slides) {
    slide.classList.remove('galary__image-wrapper--active');
  }
  slides[n].classList.add('galary__image-wrapper--active');
};

const activeDot = n => {
  for (const dot of dots) {
    dot.classList.remove('slider__dot--active');
  }
  dots[n].classList.add('slider__dot--active');
};

const prepareCurrentSlide = ind => {
  activeSlide(index);
  activeDot(index);
};

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});
