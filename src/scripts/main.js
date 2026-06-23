'use strict';

const galleryContainer = document.querySelector('.gallery__container');
const galleryTrack = document.querySelector('.gallery__track');
const dotBox = document.querySelector('.gallery__dots');
const dots = document.querySelectorAll('.gallery__dot');
const emailForm = document.querySelector('.sub__mail-form');

const images = [
  './src/images/images/gallery/gallery_1.png',
  './src/images/images/gallery/gallery_2.png',
  './src/images/images/gallery/gallery_3.png',
  './src/images/images/gallery/gallery_4.png',
  './src/images/images/gallery/gallery_5.png',
];

let touchStartX = 0;
let touchEndX = 0;
let currentImageIndex = 0;
let currentDotIndex = 0;

function changeSlide(index) {
  currentImageIndex = index;

  galleryTrack.style.transform = `translateX(-${currentImageIndex * 100}%)`;

  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  dots[currentImageIndex].classList.add('active');
}

const handleSwipe = () => {
  const swipeDistance = touchStartX - touchEndX;
  const minSwipeDistance = 50;

  if (swipeDistance > minSwipeDistance) {
    if (currentImageIndex < images.length - 1) {
      changeSlide(currentImageIndex + 1);
    }
  }

  if (swipeDistance < -minSwipeDistance) {
    if (currentImageIndex > 0) {
      changeSlide(currentImageIndex - 1);
    }
  }
};

const changeDot = () => {
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  currentDotIndex++;
  currentDotIndex = currentDotIndex % dots.length;

  dots[currentDotIndex].classList.add('active');
};

galleryContainer.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

galleryContainer.addEventListener('touchend', (event) => {
  touchEndX = event.changedTouches[0].clientX;
  handleSwipe();
});

dotBox.addEventListener('click', () => {
  changeDot();
  changeSlide(currentDotIndex);
});

emailForm.addEventListener('submit', (e) => {
  e.preventDefault();
  emailForm.reset();
  window.scrollTo({ top: 0 });
});
