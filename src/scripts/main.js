'use strict';

const icon = document.getElementById('header-burger');

icon.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});
