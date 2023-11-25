'use strict';

const dots = document.querySelectorAll('.gallery__dot');

dots.forEach((dot) => {
  dot.addEventListener('click', (event) => {
    dots.forEach(dotk => {
      dotk.classList.remove('active');
    });

    event.target.classList.add('active');
  });
});
//
