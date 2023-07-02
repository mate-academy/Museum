'use strict';

const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
  icon.addEventListener('click', (event) => {
    for (const ic of icons) {
      ic.classList.toggle('open');
    }
  });
});
