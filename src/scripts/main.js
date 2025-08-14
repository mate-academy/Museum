'use strict';

const buttons = document.querySelectorAll('.slider__nav-link');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
  })
});
