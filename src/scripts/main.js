'use strict';

const form = document.querySelector('.subscribe__form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
  });
}

const galleryViewport = document.querySelector('.gallery__viewport');
const galleryInputs = document.querySelectorAll('.gallery__page-input');
const desktopMinWidth = 1280;
const minSwipeDistance = 50;

if (galleryViewport && galleryInputs.length > 0) {
  let touchStartX = 0;

  galleryViewport.addEventListener(
    'touchstart',
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true },
  );

  galleryViewport.addEventListener(
    'touchend',
    (event) => {
      if (window.innerWidth >= desktopMinWidth) {
        return;
      }

      const touchEndX = event.changedTouches[0].clientX;
      const diffX = touchEndX - touchStartX;
      const currentIndex = [...galleryInputs].findIndex(
        (input) => input.checked,
      );

      if (currentIndex < 0) {
        return;
      }

      if (diffX < -minSwipeDistance && currentIndex < galleryInputs.length - 1) {
        galleryInputs[currentIndex + 1].checked = true;
      }

      if (diffX > minSwipeDistance && currentIndex > 0) {
        galleryInputs[currentIndex - 1].checked = true;
      }
    },
    { passive: true },
  );
}
