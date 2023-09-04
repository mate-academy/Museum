'use strict';

const buttons = document.querySelectorAll('.slider__btn');
const submitBtn = document.getElementById('submitBtn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('slider__btn--active'));
    button.classList.add('slider__btn--active');
  });
});

submitBtn.addEventListener('click', () => {
  const email = document.getElementById('email');

  if (email.checkValidity()) {
    // eslint-disable-next-line no-undef
    location.href = '';
    email.value = '';
  };
});
