'use strict';

const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.pagination__dot');

slider.addEventListener('scroll', () => {
  if (sliderItems.length < 2) {
    return;
  }

  const itemStep = slider.scrollWidth / sliderItems.length;
  const currentIndex = Math.round(slider.scrollLeft / itemStep);
  const safeIndex = Math.max(0, Math.min(currentIndex, dots.length - 1));

  dots.forEach((dot, index) => {
    dot.classList.toggle('pagination__dot--active', index === safeIndex);
  });
});
