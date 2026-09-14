'use strict';

const track = document.querySelector('.slider__track');
const dots = document.querySelectorAll('.slider__dot');
const firstItem = document.querySelector('.slider__item');

const updateActiveDot = () => {
  const slideWidth = firstItem.offsetWidth + 20;
  const currentIndex = Math.round(track.scrollLeft / slideWidth);

  dots.forEach((dot) => dot.classList.remove('slider__dot--active'));

  if (dots[currentIndex]) {
    dots[currentIndex].classList.add('slider__dot--active');
  }
};

dots.forEach((dot, index) => {
  dot.addEventListener('click', (e) => {
    e.preventDefault();

    const slideWidth = firstItem.offsetWidth + 20;

    track.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth',
    });
  });
});

track.addEventListener('scroll', updateActiveDot);

updateActiveDot();
