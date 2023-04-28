'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});

// const imgs = document.querySelectorAll('.gallery__phone');
// const dots = document.querySelectorAll('.gallery__dot');

// let currentImg = 0;

// function changeSlide(n) {
//   for (let i = 0; i < imgs.length; i++) {
//     imgs[i].style.opacity = 0;
//     dots[i].className = dots[i].className.replace(' active', '');
//   }

//   currentImg = n;

//   imgs[currentImg].style.opacity = 1;
//   dots[currentImg].className += ' active';
// }

// module.exports = changeSlide;
