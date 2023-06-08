'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.subscribe__form');

form.addEventListener('submit', submitButtonClick,);

function submitButtonClick(event) {
  event.preventDefault();
  form.reset();
}
