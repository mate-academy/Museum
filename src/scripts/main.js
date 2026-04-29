'use strict';
import '../styles/main.scss';

const openMenuButton = document.getElementById('header-burger');

const menuOverlay = document.getElementById('menu-overlay');

openMenuButton.addEventListener('click', () => {
  menuOverlay.classList.add('is-active');
});

const closeMenuButton = document.getElementById('aside-burger');

closeMenuButton.addEventListener('click', () => {
  menuOverlay.classList.remove('is-active');
});
