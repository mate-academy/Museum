'use strict';

// document.addEventListener('DOMContentLoaded', () => {
//   const sliderList = document.querySelector('.slider__list');
//   const buttons = document.querySelectorAll('.slider__buttons-btn');
//   const itemWidth = sliderList.querySelector('.slider__item').offsetWidth;

//   buttons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//       sliderList.style.transform = `translateX(-${index * itemWidth}px)`;

//       buttons.forEach((btn) =>
//         btn.classList.remove('slider__buttons-btn--active'));
//       button.classList.add('slider__buttons-btn--active');
//     });
//   });
// });

const slider = document.querySelector('.slider');
const sliderList = document.querySelector('.slider__list');
const slides = document.querySelectorAll('.slider__item');
const buttonsСontainer = document.querySelector('.slider__buttons');

const buttons = buttonsСontainer.querySelectorAll('.slider__buttons-btn');
let currentIndex = 0;

const settings = {
  itemWidth: 280,
  frameSize: 1,
  step: 1,
  gap: 16,
  previewWidth: 4,
};

function initializeSettings() {
  slider.style.minWidth = `${settings.itemWidth * settings.frameSize + settings.gap + settings.previewWidth}px`;

  if (window.innerWidth >= 768 && window.innerWidth <= 1280) {
    settings.itemWidth = 340;
    settings.frameSize = 2;
    settings.step = 2;
    settings.gap = 20;
    settings.previewWidth = 14;

    const newButtons = updateButtons();

    handleButtonsClick(newButtons);
  } else {
    settings.itemWidth = 280;
    settings.frameSize = 1;
    settings.step = 1;
    settings.gap = 16;
    settings.previewWidth = 4;

    handleButtonsClick(buttons);
  }
}

function updateButtons() {
  buttonsСontainer.innerHTML = '';

  const numButtons = (slides.length - settings.frameSize + 2) / settings.step;

  for (let i = 0; i < numButtons; i++) {
    const button = document.createElement('button');

    button.classList.add('slider__buttons-btn');

    buttonsСontainer.appendChild(button);
  }

  return buttonsСontainer.querySelectorAll('.slider__buttons-btn');
}

function handleButtonsClick(currentButtons) {
  currentButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (index > currentIndex) {
        currentIndex = index * settings.step;
      } else {
        currentIndex = index * settings.step;
      }

      buttons.forEach((btn) =>
        btn.classList.remove('slider__buttons-btn--active'));
      button.classList.add('slider__buttons-btn--active');

      let offset;

      if (currentIndex === 0) {
        offset = 0;
      } else if (currentIndex === slides.length - 1) {
        offset = (currentIndex * (settings.itemWidth + settings.gap))
          - (slider.offsetWidth - settings.itemWidth);
      } else {
        offset = currentIndex * (settings.itemWidth + settings.gap)
        - (slider.offsetWidth - settings.itemWidth) / 2
        + settings.previewWidth / 2;
      }

      sliderList.style.transform = `translateX(-${offset}px)`;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeSettings();
  window.addEventListener('resize', initializeSettings);
});
