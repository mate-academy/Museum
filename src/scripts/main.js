'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.subscription__form');

form.addEventListener('submit', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
  form.reset();
  // eslint-disable-next-line no-undef
  alert('Дякую за підписку!');
};

window.addEventListener('load', function() {
  setTimeout(function() {
    const loader = document.querySelector('.page-loader');

    if (loader) {
      loader.style.opacity = '0';

      setTimeout(function() {
        loader.style.display = 'none';
      }, 1000);
    }
  }, 500);
});
