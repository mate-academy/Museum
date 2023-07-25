'use strict';

const menu = document.getElementById('menu');
const page = document.querySelector('.page__body');
const pageWrapper = document.querySelector('.page__wrapper');
const galleryGrid = document.querySelector('.gallery__grid');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    menu.classList.add('page__menu--target');
    page.classList.add('page__body--overflow-hidden');
    pageWrapper.classList.add('page__wrapper--on');
  } else {
    menu.classList.remove('page__menu--target');
    page.classList.remove('page__body--overflow-hidden');
    pageWrapper.classList.remove('page__wrapper--on');
  }
});
;

galleryGrid.style.width
  = String((document.documentElement.clientWidth - 2 * 20)
  * 4 + (16 * 3)) + 'px';
