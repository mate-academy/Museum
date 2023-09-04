'use strict';

const buttons = document.querySelectorAll('.slider__btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('slider__btn--active'));
    button.classList.add('slider__btn--active');
  });
});

document.getElementById('formId').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('email').value = '';
});
