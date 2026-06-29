'use strict';

const galleryTrack = document.querySelector('.gallery__track');
const galleryDots = document.querySelectorAll('.gallery__dot');
const galleryImages = document.querySelectorAll('.gallery__image');
const subscribeForm = document.querySelector('.subscribe__form');
const subscribeInput = document.querySelector('.subscribe__input');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!subscribeInput.value.trim()) {
    return;
  }

  subscribeInput.value = '';

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

let activeSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

galleryImages.forEach((image) => {
  image.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
});

function isDesktop() {
  return window.matchMedia('(min-width: 1280px)').matches;
}

function updateGallery() {
  if (isDesktop()) {
    galleryTrack.style.transform = 'none';

    return;
  }

  const slideWidth = galleryImages[0].offsetWidth;

  galleryTrack.style.transform = `translateX(-${activeSlide * slideWidth}px)`;

  galleryDots.forEach((dot, index) => {
    dot.classList.toggle('gallery__dot--active', index === activeSlide);
  });
}

function goToSlide(index) {
  if (index > galleryImages.length - 1) {
    activeSlide = 0;
  } else if (index < 0) {
    activeSlide = galleryImages.length - 1;
  } else {
    activeSlide = index;
  }

  updateGallery();
}

galleryDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

galleryTrack.addEventListener('touchstart', (event) => {
  if (isDesktop()) {
    return;
  }

  touchStartX = event.touches[0].clientX;
});

galleryTrack.addEventListener('touchend', (event) => {
  if (isDesktop()) {
    return;
  }

  touchEndX = event.changedTouches[0].clientX;

  const swipeDistance = touchStartX - touchEndX;
  const minSwipeDistance = 50;

  if (swipeDistance > minSwipeDistance) {
    goToSlide(activeSlide + 1);
  }

  if (swipeDistance < -minSwipeDistance) {
    goToSlide(activeSlide - 1);
  }
});

window.addEventListener('resize', updateGallery);

updateGallery();
