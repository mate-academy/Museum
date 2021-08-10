'use strict';

const vector = require('./images/Vector-menu.svg');
const cross = require('./images/cross.svg');

const togglerButton = document.getElementById('togller');
const burgerMenu = document.querySelector('.nav');

togglerButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('nav--active');

  togglerButton.src = togglerButton.src.includes('Vector')
    ? cross
    : vector;
});
