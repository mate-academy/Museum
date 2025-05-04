'use strict';

const aside = document.querySelector('.aside');
const menuON = document.querySelector('.header__menu');
const menuOff = document.querySelector('.menu__button');
const asideClose = document.querySelectorAll('.menu__galereyFoto__links');
const slides = document.querySelectorAll('.gallery__slider-img');
const dots = document.querySelectorAll('.gallery__dots__dot');
let currentIndex = 0;
let startX = 0;

menuON.addEventListener('click', () => {
  aside.classList.add('aside__open');
});

menuOff.addEventListener('click', () => {
  aside.classList.remove('aside__open');
});

asideClose.forEach(link => {
  link.addEventListener('click', () => {
    aside.classList.remove('aside__open');
  });
});


function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('gallery__slider-img--unactive', i !== index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('gallery__dots__dot--active', i === index);
  });
}

document.querySelector('.gallery__slider').addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
document.querySelector('.gallery__slider').addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0 && currentIndex < slides.length - 1) {
      currentIndex++; // свайп влево — следующий слайд
    } else if (diff < 0 && currentIndex > 0) {
      currentIndex--; // свайп вправо — предыдущий слайд
    }

    showSlide(currentIndex);
  }
});

