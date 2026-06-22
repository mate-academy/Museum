'use strict';

const galleryContainer = document.querySelector('.gallery__container');
const galleryTrack = document.querySelector('.gallery__track');
const dots = document.querySelectorAll('.gallery__dot');
const dotBox = document.querySelector('.gallery__dots');

const images = [
  './src/images/images/gallery/gallery_1.png',
  './src/images/images/gallery/gallery_2.png',
  './src/images/images/gallery/gallery_3.png',
  './src/images/images/gallery/gallery_4.png',
  './src/images/images/gallery/gallery_5.png',
];

let touchStartX = 0;
let touchEndX = 0;
let currentIndex = 0;
let dotIndex = 0;

function changeSlide(index) {
  currentIndex = index;

  galleryTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach((dot) => {
    dot.classList.remove('color');
  });

  dots[currentIndex].classList.add('color');
}

galleryContainer.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

galleryContainer.addEventListener('touchend', (event) => {
  touchEndX = event.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = touchStartX - touchEndX;
  const minSwipeDistance = 50;

  if (swipeDistance > minSwipeDistance) {
    if (currentIndex < images.length - 1) {
      changeSlide(currentIndex + 1);
    } else {
      changeSlide(0);
    }
  } else if (swipeDistance < -minSwipeDistance) {
    if (currentIndex > 0) {
      changeSlide(currentIndex - 1);
    } else {
      changeSlide(images.length - 1);
    }
  }
}

const changeDot = () => {
  dots.forEach((dot) => {
    dot.classList.remove('color');
  });
  dotIndex = (dotIndex + 1) % dots.length;

  dots[dotIndex].classList.add('color');
};

dotBox.addEventListener('click', () => {
  changeDot();
  changeSlide(dotIndex);
});
