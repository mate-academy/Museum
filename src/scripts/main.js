'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body__menu-on');
  } else {
    document.body.classList.remove('page__body--menu-on');
  }
});
