'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function submitForm(evt) {
  evt.preventDefault();
}

document.getElementById('send').addEventListener(
  'click', submitForm, false
);
