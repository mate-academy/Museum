'use strict';

const icons = document.querySelectorAll('.icon');
const links = document.querySelectorAll('.nav__link');

icons.forEach(icon => {
  icon.addEventListener('click', (event) => {
    for (const ic of icons) {
      ic.classList.toggle('open');
    }
  });
});

links.forEach(link => {
  link.addEventListener('click', (event) => {
    for (const ic of icons) {
      ic.classList.remove('open');
    }
  });
});
