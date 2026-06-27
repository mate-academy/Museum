'use strict';

const btnMenu = document.querySelector('.header__menu-btn');
const btnClose = document.querySelector('.menu__btn-close');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.menu__nav');
const galleryContainer = document.querySelector('.gallery__container');
const galleryTrack = document.querySelector('.gallery__track');
const galleryImages = document.querySelectorAll('.gallery__img');
const img = document.querySelector('.gallery__img');
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

function changeSlide(index) {
  currentImageIndex = index;

  const currentWidth = img.offsetWidth;
  const gap = 10;

  galleryTrack.style.transform = `translateX(calc(-${currentImageIndex * (currentWidth + gap)}px))`;
}

const changeDot = () => {
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  const activeDotIndex = currentImageIndex % dots.length;

  dots[activeDotIndex].classList.add('active');
};

const handleSwipe = () => {
  const swipeDistance = touchStartX - touchEndX;
  const minSwipeDistance = 50;

  if (swipeDistance > minSwipeDistance) {
    if (currentImageIndex < images.length - 1) {
      changeSlide(currentImageIndex + 1);
      changeDot();
    }
  }

  if (swipeDistance < -minSwipeDistance) {
    if (currentImageIndex > 0) {
      changeSlide(currentImageIndex - 1);
      changeDot();
    }
  }
};

galleryContainer.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

galleryContainer.addEventListener('touchend', (event) => {
  touchEndX = event.changedTouches[0].clientX;
  handleSwipe();
});

dotBox.addEventListener('click', () => {
  if (currentImageIndex >= galleryImages.length - 1) {
    changeSlide(0);
  } else {
    changeSlide(currentImageIndex + 1);
  }
  changeDot();
});

dotBox.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();

    if (currentImageIndex >= galleryImages.length - 1) {
      changeSlide(0);
    } else {
      changeSlide(currentImageIndex + 1);
    }
    changeDot();
  }
});

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('visible');
});

btnClose.addEventListener('click', () => {
  menu.classList.toggle('visible');
});

nav.addEventListener('click', (e) => {
  const target = e.target.closest('.menu__nav--link');

  if (target) {
    menu.classList.toggle('visible');
  }
});

emailForm.addEventListener('submit', (e) => {
  e.preventDefault();
  emailForm.reset();
  window.scrollTo({ top: 0 });
});
