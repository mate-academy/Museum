'use strict';

const menu = document.querySelector('.header__menu');
const menuPage = document.querySelector('.menu');

menu.addEventListener('click', e => {
  if (window.screen.width >= 1280) {
    menuPage.style.transform = 'translateY(0)';
  } else {
    menuPage.style.transform = 'translateX(0)';
  }
});

menuPage.addEventListener('click', e => {
  if (e.target.nodeName === 'A' || e.target.nodeName === 'IMG') {
    if (window.screen.width >= 1280) {
      menuPage.style.transform = 'translateY(-100%)';
    } else {
      menuPage.style.transform = 'translateX(-100%)';
    }
  }
});

menuPage.addEventListener('mouseleave', e => {
  if (window.screen.width >= 1280) {
    menuPage.style.transform = 'translateY(-100%)';
  } else {
    menuPage.style.transform = 'translateX(-100%)';
  }

  document.querySelector('.menu__search-input').remove();
});
