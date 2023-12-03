'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu_scroll');
  } else {
    document.body.classList.remove('page__body--menu_scroll');
  }
});

const sliderImages = document.querySelectorAll('.galery__photo--slider img');
const leftArrow = document.querySelector('.prev-btn');
const rightArrow = document.querySelector('.next-btn');
let currentSlideIndex = 0;

function showSlide() {
  sliderImages.forEach(slide => {
    slide.style.display = 'none';
  });

  sliderImages[currentSlideIndex].style.display = 'block';
}

leftArrow.addEventListener('click', () => {
  currentSlideIndex--;

  if (currentSlideIndex < 0) {
    currentSlideIndex = sliderImages.length - 1;
  }
  showSlide();
});

rightArrow.addEventListener('click', () => {
  currentSlideIndex++;

  if (currentSlideIndex >= sliderImages.length) {
    currentSlideIndex = 0;
  }
  showSlide();
});
showSlide();

/* const container = document.querySelector('.header');

container.style.width = window.innerWidth + 'px';
document.body.style.overflowX = 'hidden'; */
