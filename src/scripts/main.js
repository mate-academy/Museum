'use strict';

const lectures = document.querySelectorAll('.lecture');
const galleries = document.querySelectorAll('.gallery__content');

function updateLectureMarginBottom() {
  for (const lecture of lectures) {
    const content = lecture.querySelector('.lecture__content');
    const marginBottom = -content.offsetHeight * 0.5 + 2;

    content.style.marginBottom = `${marginBottom}px`;
  }
}

function updateGalleryActiveImages() {
  galleries.forEach((gallery) => {
    checkImageInGallery({ target: gallery });
  });
}

function checkImageInGallery(event) {
  const gallery = event.target;
  const slider = gallery.nextElementSibling;
  const sliderItems = slider.querySelectorAll('.slider__item');

  const galleryRect = gallery.getBoundingClientRect();

  const galleryLeft = galleryRect.left + galleryRect.width * 0.25;
  const galleryRight = galleryRect.left + galleryRect.width * 0.75;

  const galleryImages = gallery.querySelectorAll('.gallery__image');

  galleryImages.forEach((image, index) => {
    const imageRect = image.getBoundingClientRect();

    const imageLeft = imageRect.left;
    const imageRight = imageRect.right;

    const isInView = sliderItems[index].classList.contains(
      'slider__item--active',
    );

    if (imageLeft < galleryRight && imageRight > galleryLeft) {
      if (!isInView) {
        sliderItems[index].classList.add('slider__item--active');
      }
    } else {
      if (isInView) {
        sliderItems[index].classList.remove('slider__item--active');
      }
    }
  });
}

function onResize() {
  updateLectureMarginBottom();
  updateGalleryActiveImages();
}

galleries.forEach((gallery) => {
  gallery.addEventListener('scroll', checkImageInGallery);
});

onResize();
window.addEventListener('resize', onResize);
