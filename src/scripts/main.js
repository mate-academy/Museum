'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page--with-nav');
  } else {
    document.body.classList.remove('page--with-nav');
  }
});
