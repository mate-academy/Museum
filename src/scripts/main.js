'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const burgerToggle = document.getElementById('menu-toggle');
  const menuLinks = document.querySelectorAll('.menu a');

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (burgerToggle) {
        burgerToggle.checked = false; // Закриває меню
      }
    });
  });
});
