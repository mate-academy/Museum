'use strict';

const galleryList = document.querySelector('.gallery__list');
const galleryDots = document.querySelectorAll('.gallery__dot');

galleryList.addEventListener('scroll', () => {
  const index = Math.round(galleryList.scrollLeft / galleryList.clientWidth);

  galleryDots.forEach((dot, i) => {
    dot.classList.toggle('gallery__dot--active', i === index);
  });
});
