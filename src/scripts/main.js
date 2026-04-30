'use strict';

const dots = document.querySelectorAll('.gallery__dot');
const track = document.querySelector('.gallery__track');

const updateActiveDot = () => {
  const slideWidth = track.clientWidth;
  const currentIndex = Math.round(track.scrollLeft / slideWidth);

  dots.forEach((dot) => dot.classList.remove('active'));

  if (dots[currentIndex]) {
    dots[currentIndex].classList.add('active');
  }
};

dots.forEach((dot, index) => {
  dot.addEventListener('click', (e) => {
    e.preventDefault();

    track.scrollTo({
      left: track.clientWidth * index,
      behavior: 'smooth',
    });
  });
});

track.addEventListener('scroll', updateActiveDot);

updateActiveDot();
