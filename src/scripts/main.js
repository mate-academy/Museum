'use strict';

document.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu--mobile');
  } else {
    document.body.classList.remove('page__body--with-menu--mobile');
  }
});

window.addEventListener('hashchange', () => {
  const overlay = document.querySelector('.overlay');

  if (window.location.hash === '#menu') {
    overlay.classList.add('page__overlay-active');
  } else {
    overlay.classList.remove('page__overlay-active');
  }
});
