'use strict';

let currentIndex = 0;
let interval;

function switchSlide() {
  currentIndex = (currentIndex + 1) % 4;
  document.getElementById(`radio${currentIndex + 1}`).checked = true;
}

function startSlider() {
  if (interval) {
    stopSlider();
  }

  interval = setInterval(switchSlide, 2000);
}

function stopSlider() {
  // currentIndex = 0;
  clearInterval(interval);
}

function checkWindowSize() {
  if (window.innerWidth < 1280) {
    startSlider();
  } else {
    stopSlider();
  }
}

checkWindowSize();

window.addEventListener('resize', () => {
  if (interval) {
    document.getElementById('radio1').checked = true;
    currentIndex = 0;
    stopSlider();
    checkWindowSize();
  }
  checkWindowSize();
});

document.querySelectorAll('input[name="radio-btn"]').forEach((radio, index) => {
  radio.addEventListener('click', () => {
    stopSlider();
    currentIndex = index;

    setTimeout(() => {
      checkWindowSize();
    }, 5000);
  });
});
