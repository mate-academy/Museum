'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const makeDefault = document.querySelector('.subscription__button');

makeDefault.addEventListener('submit', function(e) {
  e.preventDefault();

  document.getElementsByName('email')[0].value = '';
});
