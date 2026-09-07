'use strict';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  if (window.location.hash) {
    history.replaceState(
      null,
      '',
      window.location.pathname + window.location.search,
    );
  }

  window.scrollTo(0, 0);
});

window.addEventListener('pageshow', () => {
  window.scrollTo(0, 0);
});

const slider = document.querySelector('.gallery__slider');
const slides = document.querySelectorAll('.gallery__slide');
const dots = document.querySelectorAll('.gallery__dot');

function setActiveDot(index) {
  dots.forEach((dot) => {
    dot.classList.remove('gallery__dot--active');
  });

  dots[index].classList.add('gallery__dot--active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    const slide = slides[index];

    slider.scrollTo({
      left: slide.offsetLeft,
      behavior: 'smooth',
    });

    setActiveDot(index);
  });
});

slider.addEventListener('scroll', () => {
  let closestSlideIndex = 0;
  let smallestDistance = Infinity;

  slides.forEach((slide, index) => {
    const distance = Math.abs(slide.offsetLeft - slider.scrollLeft);

    if (distance < smallestDistance) {
      smallestDistance = distance;
      closestSlideIndex = index;
    }
  });

  setActiveDot(closestSlideIndex);
});

const form = document.querySelector('.subscription__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
