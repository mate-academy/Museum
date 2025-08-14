'use strict';

const page = document.querySelector('.baseline-menu');
const switcher = document.querySelector('.page__header');
const switcher2 = document.querySelector('.page__main');

const pageclosetablet = document.querySelector('.baseline-close--tablet');
const pageclosephone = document.querySelector('.baseline-close--phone');
const linkgal = document.querySelector('.page__menu-section--first--element--a-gal');
const linkeve = document.querySelector('.page__menu-section--first--element--a-eve');
const linklec = document.querySelector('.page__menu-section--first--element--a-gal-lec');
const linkcont = document.querySelector('.page__menu-section--first--element--a-gal-cont');

page.addEventListener('click', () => {
  if (page.classList.contains('baseline-opacity')) {
    page.classList.remove('baseline-opacity');
    switcher.classList.remove('page__header--opacity');
    switcher2.classList.remove('page__main--opacity');

  } else {
    page.classList.add('baseline-opacity');
    switcher.classList.add('page__header--opacity');
    switcher2.classList.add('page__main--opacity');
  }
})

pageclosetablet.addEventListener('click', () => {
  if (page.classList.contains('baseline-opacity')) {
    page.classList.remove('baseline-opacity');
    switcher.classList.remove('page__header--opacity');
    switcher2.classList.remove('page__main--opacity');
  } else {
    page.classList.add('baseline-opacity');
    switcher.classList.add('page__header--opacity');
    switcher2.classList.add('page__main--opacity');
  }
})

pageclosephone.addEventListener('click', () => {
  if (page.classList.contains('baseline-opacity')) {
    page.classList.remove('baseline-opacity');
    switcher.classList.remove('page__header--opacity');
    switcher2.classList.remove('page__main--opacity');
  } else {
    page.classList.add('baseline-opacity');
    switcher.classList.add('page__header--opacity');
    switcher2.classList.add('page__main--opacity');
  }
})

linkgal.addEventListener('click', () => {
  if (page.classList.contains('baseline-opacity')) {
    page.classList.remove('baseline-opacity');
    switcher.classList.remove('page__header--opacity');
    switcher2.classList.remove('page__main--opacity');
  } else {
    page.classList.add('baseline-opacity');
    switcher.classList.add('page__header--opacity');
    switcher2.classList.add('page__main--opacity');
  }
})

linkeve.addEventListener('click', () => {
  if (page.classList.contains('baseline-opacity')) {
    page.classList.remove('baseline-opacity');
    switcher.classList.remove('page__header--opacity');
    switcher2.classList.remove('page__main--opacity');
  } else {
    page.classList.add('baseline-opacity');
    switcher.classList.add('page__header--opacity');
    switcher2.classList.add('page__main--opacity');
  }
})

linklec.addEventListener('click', () => {
  if (page.classList.contains('baseline-opacity')) {
    page.classList.remove('baseline-opacity');
    switcher.classList.remove('page__header--opacity');
    switcher2.classList.remove('page__main--opacity');
  } else {
    page.classList.add('baseline-opacity');
    switcher.classList.add('page__header--opacity');
    switcher2.classList.add('page__main--opacity');
  }
})

linkcont.addEventListener('click', () => {
  if (page.classList.contains('baseline-opacity')) {
    page.classList.remove('baseline-opacity');
    switcher.classList.remove('page__header--opacity');
    switcher2.classList.remove('page__main--opacity');
  } else {
    page.classList.add('baseline-opacity');
    switcher.classList.add('page__header--opacity');
    switcher2.classList.add('page__main--opacity');
  }
})




