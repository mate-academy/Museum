'use strict';

const galleryImages = document.querySelectorAll('.gallery__image');
const galleryNavPoints = document.querySelectorAll('.gallery__nav-point');

function updateGallery() {
  galleryNavPoints.forEach(navPoint => {
    navPoint.onclick = null;
  });

  if (window.innerWidth >= 1280) {
    galleryImages.forEach(img => {
      img.classList.remove('gallery__image-active');
    });
  } else if (window.innerWidth >= 640) {
    activateImagesForTablets();
  } else {
    activateImagesForMobiles();
  }
}

function activateImagesForTablets() {
  galleryNavPoints.forEach((navPoint, index) => {
    navPoint.onclick = () => {
      const nextIndex = (index + 1) % galleryImages.length;
      updateActiveImages(index, nextIndex);
    };
  });
  updateActiveImages(0, 1);
}

function activateImagesForMobiles() {
  galleryNavPoints.forEach((navPoint, index) => {
    navPoint.onclick = () => {
      updateActiveImages(index);
    };
  });
  updateActiveImages(0);
}

function updateActiveImages(...activeIndices) {
  galleryImages.forEach((img, index) => {
    if (activeIndices.includes(index)) {
      img.classList.add('gallery__image-active');
      galleryNavPoints[index].classList.add('gallery__nav-point-active');
    } else {
      img.classList.remove('gallery__image-active');
      galleryNavPoints[index].classList.remove('gallery__nav-point-active');
    }
  });
}

updateGallery();
window.addEventListener('resize', updateGallery);
