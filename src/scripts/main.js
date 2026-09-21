'use strict';

const form = document.querySelector('.subscribe__email');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const gallerySlider = document.querySelector('.gallery__slider');
const galleryItems = document.querySelectorAll('.gallery__item');
const galleryDots = document.querySelectorAll('.gallery__dot');

let currentSlide = 0;

galleryDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;

    const itemWidth = galleryItems[0].offsetWidth;
    const gap = window.innerWidth <= 639 ? 16 : 20;

    const move = (itemWidth + gap) * currentSlide;

    gallerySlider.style.transform = `translateX(-${move}px)`;

    galleryDots.forEach((item) => {
      item.classList.remove('gallery__dot--active');
    });

    dot.classList.add('gallery__dot--active');
  });
});
