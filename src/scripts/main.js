/* eslint-disable no-undef */
'use strict';

const photos = document.querySelectorAll('.photos__photo');
const dots = document.querySelectorAll('.gallery__dot');
const slider = document.querySelector('.photos');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(photos).indexOf(entry.target);

        dots.forEach((dot) => dot.classList.remove('gallery__dot--active'));

        dots[index].classList.add('gallery__dot--active');
      }
    });
  },
  {
    root: slider,
    rootMargin: '0px -50% 0px 0px',
    threshold: 0,
  },
);

photos.forEach((photo) => observer.observe(photo));

dots.forEach((dot, index) => {
  dot.addEventListener('click', (e) => {
    e.preventDefault();

    photos[index].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  });
});
