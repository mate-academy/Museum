'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__with-menu');
  } else {
    document.body.classList.remove('page__with-menu');
  }
});

const form = document.querySelector('.subscription__form');

form.addEventListener('submit', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
  form.reset();
};
