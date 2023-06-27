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

const form = document.querySelector('.follow__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
  window.alert('You are subscribed!');
});
