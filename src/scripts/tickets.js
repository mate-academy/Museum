'use strict';

const tiketsBtn = document.querySelector('.button-green');
const tiketsPage = document.querySelector('.tickets');

tiketsBtn.addEventListener('click', e => {
  tiketsPage.style.transform = 'translateX(0)';
});

tiketsPage.addEventListener('click', e => {
  if (e.target.nodeName === 'A') {
    tiketsPage.style.transform = 'translateX(-100%)';
  }
});
