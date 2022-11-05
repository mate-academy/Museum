'use strict';

window.addEventListener('mouseover', e => {
  const inputMail = document.querySelector('.follow__email');
  const temp = inputMail.style.marginRight;

  if (e.target === document.querySelector('.follow__button')) {
    inputMail.style.marginRight = 0;
    inputMail.style.borderRadius = '35px 0 0 35px';
  }

  e.target.addEventListener('mouseleave', () => {
    inputMail.style.marginRight = temp;
    inputMail.style.borderRadius = '';
  });
});

document.querySelector('.follow__form').addEventListener('submit', e => {
  e.preventDefault();
  document.querySelector('.follow__form').reset();
});
