'use strict';

const dots = document.querySelector('.gallery__slider-dots');
const slider = document.querySelector('.gallery__slider');

dots.addEventListener('click', e => {
  if (e.target.nodeName === 'LI') {
    const dotsArr = Array.from(dots.children);

    dotsArr.forEach(item =>
      item.classList.remove('active')
    );

    for (let i = 0; i < dotsArr.length; i++) {
      if (e.target.classList.contains('one')) {
        slider.style.transform = `translateX(0%)`;
        e.target.classList.add('active');
      }

      if (e.target.classList.contains('two')) {
        slider.style.transform = `translateX(-${300}px)`;

        e.target.classList.add('active');
      }

      if (e.target.classList.contains('three')) {
        slider.style.transform = `translateX(-${600}px)`;

        e.target.classList.add('active');
      }

      if (e.target.classList.contains('four')) {
        slider.style.transform = `translateX(-${900}px)`;

        e.target.classList.add('active');
      }
    }
  }
});
