'use strict';

/* global IntersectionObserver */

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('gallery-slider');
  const items = document.querySelectorAll('.gallery__item');
  const dots = document.querySelectorAll('.gallery__dot');

  if (slider && dots.length > 0) {
    const observerOptions = {
      root: slider,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(items).indexOf(entry.target);

          dots.forEach((dot) => dot.classList.remove('gallery__dot--active'));

          if (dots[index]) {
            dots[index].classList.add('gallery__dot--active');
          }
        }
      });
    }, observerOptions);

    items.forEach((i) => observer.observe(i));

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        if (items[index]) {
          items[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
          });
        }
      });
    });
  }
});
