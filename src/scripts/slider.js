'use strict';

const sliderImages = document.querySelector('.slider__images');
const sliderButtons = document.querySelectorAll('.slider__button-wr');

sliderButtons.forEach(el => {
  el.onclick = moveSlider;
});

function moveSlider({ currentTarget }) {
  const num = currentTarget.getAttribute('data-image-num');

  if (window.innerWidth >= 768) {
    sliderImages.style.transform = `translateX(-${360 * num}px)`;
  } else {
    sliderImages.style.transform = `translateX(-${300 * num}px)`;
  }

  markButton(num);
};

function markButton(num) {
  document.querySelector('.slider__button--active')
    .classList.remove('slider__button--active');

  const activeBtn = document.querySelector(`[data-image-num="${num}"]`);

  activeBtn.firstElementChild.classList.add('slider__button--active');
}
