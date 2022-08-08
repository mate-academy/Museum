'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__menu-on');
  } else {
    document.body.classList.remove('page__menu-on');
  }
});

function stopDefAction(evt) {
  evt.preventDefault();
}

document.getElementById('send').addEventListener(
  'click', stopDefAction, false
);
