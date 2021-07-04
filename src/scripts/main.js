'use strict';

const h = document.querySelector('.icon-menu');
const n = document.querySelector('.nav');

h.addEventListener('click', () => {
  n.classList.toggle('nav--activ');
});
