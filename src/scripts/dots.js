'use strict';

const track = document.getElementById('galleryTrack');
const dotsContainer = document.getElementById('galleryDots');
const slides = document.querySelectorAll('.gallery__image');

let currentIndex = 0;

// створення dots
slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');

  if (i === 0) dot.classList.add('active');

  dot.addEventListener('click', () => {
    scrollToSlide(i);
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// scroll to slide
function scrollToSlide(index) {
  const slide = slides[index];

  track.scrollTo({
    left: slide.offsetLeft,
    behavior: 'smooth',
  });

  setActiveDot(index);
}

// active dot
function setActiveDot(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  currentIndex = index;
}

// sync scroll → dots
track.addEventListener('scroll', () => {
  let closestIndex = 0;
  let minDistance = Infinity;

  slides.forEach((slide, i) => {
    const distance = Math.abs(track.scrollLeft - slide.offsetLeft);

    if (distance < minDistance) {
      minDistance = distance;
      closestIndex = i;
    }
  });

  setActiveDot(closestIndex);
});
