'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    document.querySelector('.page__menu').style.transform = 'translateY(0%)';
    window.scrollTo({ behavior: 'smooth' });
  } else {
    document.body.classList.remove('page__body--with-menu');
    document.querySelector('.page__menu').style.transform = 'translateY(-100%)';
  }
});

let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.slider__items');

const end = () => {
  isDown = false;
  slider.classList.remove('active');
};

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const move = (e) => {
  if (!isDown) {
    return;
  }

  e.preventDefault();

  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);

  slider.scrollLeft = scrollLeft - dist;
};

(() => {
  slider.addEventListener('mousedown', start);
  slider.addEventListener('touchstart', start);

  slider.addEventListener('mousemove', move);
  slider.addEventListener('touchmove', move);

  slider.addEventListener('mouseleave', end);
  slider.addEventListener('mouseup', end);
  slider.addEventListener('touchend', end);
})();
