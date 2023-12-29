'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const sliderList = document.querySelector('.slider__list');
  const slides = document.querySelectorAll('.slider__item');

  const paginationLinks
   = document.querySelectorAll('.slider__pagination--link');

  const slideWidth = slides[0].getBoundingClientRect().width;
  let currentIndex = 0;

  function goToSlide(index) {
    if (index < 0 || index >= slides.length) {
      return;
    }

    currentIndex = index;

    const offset = -slideWidth * currentIndex;

    sliderList.style.transform = `translateX(${offset}px)`;
  }

  paginationLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const slideIndex = parseInt(this.getAttribute('data-slide'));

      goToSlide(slideIndex);
    });
  });
});
