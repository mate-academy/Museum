'use strict';

const xxx = document.getElementById('blur');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    xxx.classList.add('page--blur');
    document.querySelector('.header').classList.add('page--blur');
  } else {
    document.body.classList.remove('page__body--with-menu');
    xxx.classList.remove('page--blur');
    document.querySelector('.header').classList.remove('page--blur');
  }
});

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

const showOnPx = 500;
const backToTopButton = document.querySelector('.page__back-to-top');

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener('scroll', () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove('page__back-to-top--hidden');
  } else {
    backToTopButton.classList.add('page__back-to-top--hidden');
  }
});

const goToTop = () => {
  document.body.scrollIntoView();
};

backToTopButton.addEventListener('click', goToTop);
