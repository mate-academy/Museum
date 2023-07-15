'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const carouselTrack = document.querySelector('.carousel__track');
  const carouselItems = document.querySelectorAll('.carousel__item');
  const pagination = document.querySelector('.carousel__pagination');
  const prevButton = document.querySelector('.carousel__prev-button');
  const nextButton = document.querySelector('.carousel__next-button');

  let currentIndex = 0;
  const slideWidth = carouselItems[0].offsetWidth + 20;

  function goToSlide(index) {
    carouselTrack.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;

    const dots = document.querySelectorAll('.carousel__pagination-dot');

    dots.forEach((dot, i) => {
      dot.classList.toggle('carousel__pagination-dot--active',
        i === currentIndex);
    });
  }

  for (let i = 0; i < carouselItems.length; i++) {
    const dot = document.createElement('span');

    dot.classList.add('carousel__pagination-dot');

    dot.addEventListener('click', function() {
      goToSlide(i);
    });
    pagination.appendChild(dot);
  }

  const firstDot = document.querySelector('.carousel__pagination-dot');

  firstDot.classList.add('carousel__pagination-dot--active');

  prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  });

  nextButton.addEventListener('click', function() {
    if (currentIndex < carouselItems.length - 1) {
      goToSlide(currentIndex + 1);
    }
  });
});
