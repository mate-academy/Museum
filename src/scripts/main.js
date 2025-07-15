'use strict';

const track = document.getElementById('carouselTrack');
const dots = document.querySelectorAll('.gallery__dot');
const slides = document.querySelectorAll('.gallery__slide');

function isSlideVisible(slide) {
  const style = window.getComputedStyle(slide);
  return style.display !== 'none';
}

function updateDots() {
  const trackRect = track.getBoundingClientRect();
  let maxVisibleWidth = 0;
  let activeIndex = 0;

  slides.forEach((slide, index) => {
    if (!isSlideVisible(slide)) return;

    const slideRect = slide.getBoundingClientRect();
    const visibleWidth = Math.min(slideRect.right, trackRect.right) - Math.max(slideRect.left, trackRect.left);

    if (visibleWidth > maxVisibleWidth) {
      maxVisibleWidth = visibleWidth;
      activeIndex = index;
    }
  });

  let visibleSlideCounter = -1;
  let visibleActiveIndex = 0;

  slides.forEach((slide, index) => {
    if (!isSlideVisible(slide)) return;
    visibleSlideCounter++;
    if (index === activeIndex) {
      visibleActiveIndex = visibleSlideCounter;
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('gallery__dot--active', i === visibleActiveIndex);
  });
}

track.addEventListener('scroll', () => {
  window.requestAnimationFrame(updateDots);
});

dots.forEach((dot, dotIndex) => {
  dot.addEventListener('click', () => {
    const visibleSlides = Array.from(slides).filter(isSlideVisible);
    const targetSlide = visibleSlides[dotIndex];
    if (!targetSlide) return;

    const slideOffset = targetSlide.offsetLeft;

    track.scrollTo({
      left: slideOffset,
      behavior: 'smooth',
    });
  });
});
