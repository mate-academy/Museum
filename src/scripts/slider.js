'use strict';

const slider = document.querySelector('#slider');
const controls = document.querySelectorAll('.gallery_btns_btn');
let currentPercent = 0;

function getActiveBtn (getActiveBtn) {
  controls.forEach(control => {
   control.classList.remove('gallery_btns_btn--active');
  });

  getActiveBtn.classList.add('gallery_btns_btn--active');
}

function sliderScroll (percent) {
  currentPercent = percent;

  if (currentPercent > 106) {
    currentPercent = 106;
  }

  if (currentPercent < 0) {
    currentPercent = 0;
  }

  slider.style.transform = `translateX(-${currentPercent}%)`;
}

document.querySelector('#slider-btn-1').addEventListener('click', function () {
  sliderScroll(0);
  getActiveBtn(this);
});

document.querySelector('#slider-btn-2').addEventListener('click', function () {
  sliderScroll(33);
  getActiveBtn(this);
});

document.querySelector('#slider-btn-3').addEventListener('click', function () {
  sliderScroll(66);
  getActiveBtn(this);
});

document.querySelector('#slider-btn-4').addEventListener('click', function () {
  sliderScroll(106);
  getActiveBtn(this);
});
