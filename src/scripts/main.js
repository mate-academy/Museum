'use strict';

const menu = document.querySelector('.mobile-menu');
const toggler = document.querySelector('.toggler');

toggler.onclick = function toggleSidebar() {
  menu.classList.toggle('mobile-menu--open');
  toggler.classList.toggle('toggler--active');
};
