'use strict';
window.addEventListener('DOMContentLoaded', () => {
  const sliderWrapper = document.querySelector('.js-wrapper');
  const slider = sliderWrapper.querySelector('.js-slider');
  const slides = slider.querySelectorAll('.js-slide');
  const dotsWrapper = document.querySelector('.js-dots');
  let dots;

  const sliderHeight = Number(
    getComputedStyle(sliderWrapper).height.slice(0, -2),
  );
  const sliderGap = getComputedStyle(slider).gap.split(' ');
  const sliderGapRow = Number(sliderGap[0].slice(0, -2));
  const sliderGapColumn = Number(sliderGap[1].slice(0, -2));
  const transformHeight = sliderGapRow + sliderHeight;

  const qtySlides = slides.length;

  slides[0].classList.add('active-slide');

  if (window.innerWidth >= 768) {
    const slideWidth = Number(getComputedStyle(slides[0]).width.slice(0, -2));

    console.log(slideWidth);
    slides[1].classList.add('active-slide');
  }

  for (let i = 0; i < qtySlides; i++) {
    const dot = document.createElement('li');
    dot.classList.add('dots__item');

    if (i === 0) {
      dot.classList.add('active-dot');
    }

    dotsWrapper.append(dot);
  }

  dots = dotsWrapper.querySelectorAll('.dots__item');

  function hideAllDotsAndSlides() {
    slides.forEach((slide) => slide.classList.remove('active-slide'));
    dots.forEach((dot) => dot.classList.remove('active-dot'));
  }

  function showDotAndSlide(i) {
    dots[i].classList.add('active-dot');
    if (i === 0) {
      slides[i].classList.add('active-slide');
      slider.style.transform = 'translateY(0px)';

      if (window.innerWidth >= 768) {
        slides[i + 1].classList.add('active-slide');
      }
    } else {
      slides[i].classList.add('active-slide');
      slider.style.transform = `translateY(${-transformHeight * i}px)`;

      if (window.innerWidth >= 768 && slides[i + 1]) {
        slides[i + 1].classList.add('active-slide');
      }
    }
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      hideAllDotsAndSlides();
      showDotAndSlide(i);
    });
  });
});
