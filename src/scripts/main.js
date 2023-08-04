"use strict";

//slider

let count = 0;
let width;
let timer;
const sliderImages = document.querySelectorAll('.slider__image');
const sliderLine = document.querySelector('.slider__line');
const sliderDots = document.querySelectorAll('.slider__dot');

let gap = 20; // gaps are equal to pageGrid column gap according to design
let halfGap;
if (window.innerWidth >= 640) {
  gap = 30;
  halfGap = gap / 2;
}

function init() {
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * sliderImages.length + gap * (sliderImages.length - 1) + 'px';

  sliderImages.forEach(item => {
    item.style.width = width + 'px';
  });

  if (window.innerWidth >= 640) {
    sliderLine.style.width = ((width / 2) - halfGap) * sliderImages.length + gap * (sliderImages.length - 1) + 'px';

    sliderImages.forEach(item => {
      item.style.width = ((width / 2) - halfGap) + 'px';
    });
  }
  rollSlider();
}

window.addEventListener('resize', init);
init();

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + (count * width + count * gap) + 'px)';
  if (window.innerWidth >= 640) {
    sliderLine.style.transform = 'translate(-' + (count * ((width / 2) - halfGap) + count * gap) + 'px)';
  }
}

function thisSlide(index) {
  sliderDots.forEach(item =>
    item.classList.remove('slider__dot--active'));

  sliderDots[index].classList.add('slider__dot--active');
}


function autoSlider() {
  timer = setTimeout(function() {
    count++;

    if (count >= sliderImages.length) {
      count = 0;
    }
    thisSlide(count);
    rollSlider();
    autoSlider();
  }, 2000);
}

autoSlider();

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearTimeout(timer);
    count = index;
    thisSlide(count);
    rollSlider();
    setTimeout(autoSlider, 1500);
  })
})

// animation on scroll

function onScrollAnimation() {
  const animated = document.querySelectorAll('.animated');

  for (let i = 0; i < animated.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = animated[i].getBoundingClientRect().top;
    const elementVisible = 180;

    if (elementTop < windowHeight - elementVisible) {
      animated[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', e => onScrollAnimation());
