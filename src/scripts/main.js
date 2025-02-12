'use strict';

const navButtons = document.querySelectorAll('.navigation-btn');
const slidesContainer = document.querySelector('.imgs-slides');

const updateSlider = (index) => {
  const slideWidth = document.querySelector('.slide').offsetWidth;
  slidesContainer.style.marginLeft = `-${index * slideWidth}px`;

  navButtons.forEach((btn, i) => {
    if (i === index) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
};

navButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const index = parseInt(btn.getAttribute('data-slide'));
    updateSlider(index);
  });
});

window.addEventListener('load', () => {
  updateSlider(0);
  navButtons[0].classList.add('active');
});
