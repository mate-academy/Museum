'use strict';

document.querySelector('#form').addEventListener('submit', function() {
  const checkForm = document.querySelector('#form').reportValidity();

  if (checkForm === true) {
    document.getElementById('form').reset() || window.scrollTo(0, 0);
  };
}, false);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.querySelector('.header').classList.add('header--transparent');

    document.querySelector('.exhibitions')
      .classList.add('exhibitions--transparent');
    document.querySelector('.gallery').classList.add('gallery--transparent');
    document.querySelector('.about-us').classList.add('about-us--transparent');
    document.querySelector('.footer').classList.add('footer--transparent');
  } else {
    document.querySelector('.header').classList.remove('header--transparent');

    document.querySelector('.exhibitions')
      .classList.remove('exhibitions--transparent');
    document.querySelector('.gallery').classList.remove('gallery--transparent');

    document.querySelector('.about-us')
      .classList.remove('about-us--transparent');
    document.querySelector('.footer').classList.remove('footer--transparent');
  }
});

const mover = document.querySelectorAll('.gallery__dot');

mover.forEach((dots) => {
  dots.addEventListener('click', function() {
    mover.forEach(dot => {
      dot.classList.remove('gallery__dot--active');
    });

    dots.classList.add('gallery__dot--active');
  });
});

const firstDot = document.querySelector('.gallery__dot--1');

document.querySelector('.gallery__dot--1')
  .addEventListener('click', function() {
    const activeDot = firstDot.classList.contains('gallery__dot--active');

    if (activeDot === true) {
      document.querySelector('.gallery__photo-slider')
        .classList.add('gallery__photo-slider--move-1');

      document.querySelector('.gallery__photo-slider')
        .classList.remove('gallery__photo-slider--move-2');

      document.querySelector('.gallery__photo-slider')
        .classList.remove('gallery__photo-slider--move-3');

      document.querySelector('.gallery__photo-slider')
        .classList.remove('gallery__photo-slider--move-4');
    }
  });

const secondDot = document.querySelector('.gallery__dot--2');

document.querySelector('.gallery__dot--2')
  .addEventListener('click', function() {
    const activeDot = secondDot.classList.contains('gallery__dot--active');

    if (activeDot === true) {
      document.querySelector('.gallery__photo-slider')
        .classList.add('gallery__photo-slider--move-2');

      document.querySelector('.gallery__photo-slider')
        .classList.remove('gallery__photo-slider--move-1');

      document.querySelector('.gallery__photo-slider')
        .classList.remove('gallery__photo-slider--move-3');

      document.querySelector('.gallery__photo-slider')
        .classList.remove('gallery__photo-slider--move-4');
    }
  });

const thirdDot = document.querySelector('.gallery__dot--3');

document.querySelector('.gallery__dot--3')
  .addEventListener('click', function() {
    const activeDot = thirdDot.classList.contains('gallery__dot--active');

    if (activeDot === true) {
      document.querySelector('.gallery__photo-slider')
        .classList.add('gallery__photo-slider--move-3');

      document.querySelector('.gallery__photo-slider')
        .classList.remove('gallery__photo-slider--move-2');

      document.querySelector('.gallery__photo-slider')
        .classList.remove('gallery__photo-slider--move-1');

      document.querySelector('.gallery__photo-slider')
        .classList.remove('gallery__photo-slider--move-4');
    }
  });

const fourthDot = document.querySelector('.gallery__dot--4');

document.querySelector('.gallery__dot--4')
  .addEventListener('click', function() {
    const activeDot = fourthDot.classList.contains('gallery__dot--active');

    if (activeDot === true) {
      document.querySelector('.gallery__photo-slider')
        .classList.add('gallery__photo-slider--move-4');

      document.querySelector('.gallery__photo-slider')
        .classList.remove('gallery__photo-slider--move-2');

      document.querySelector('.gallery__photo-slider')
        .classList.remove('gallery__photo-slider--move-3');

      document.querySelector('.gallery__photo-slider')
        .classList.remove('gallery__photo-slider--move-1');
    }
  });
