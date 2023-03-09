'use strict';

const checkIsMenuOpen = () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
};

window.addEventListener('hashchange', () => {
  checkIsMenuOpen();
});
