'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.gallery__track');
  const slides = document.querySelectorAll('.gallery__photo');
  const dots = document.querySelectorAll('.gallery__dot');

  let currentSlide = 0;

  setInterval(() => {
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    const slideWidth = slides[0].clientWidth;

    track.scrollTo({
      left: slideWidth * currentSlide,
      behavior: 'smooth',
    });

    dots.forEach((d) => d.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }, 3000);
});
