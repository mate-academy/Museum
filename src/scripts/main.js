'use strict';

const menu = document.querySelector('.js-header__nav');
const menuOpen = document.querySelector('.js-header__burger');
const menuClose = document.querySelector('.js-nav__close');

menuOpen.addEventListener('click', function() {
  showMenu();
});

menuClose.addEventListener('click', function() {
  hideMenu();
});

menu.addEventListener('click', (e) => {
  const link = e.target.closest('.nav__link');

  if (link) {
    hideMenu();
  }
});

function hideMenu() {
  menu.style.transform = 'translateY(-100%)';
}

function showMenu() {
  menu.style.transform = 'translateY(0)';
}
