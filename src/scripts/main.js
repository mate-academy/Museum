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
};

window.addEventListener('load', function() {
  setTimeout(function() {
    const loader = document.querySelector('.page-loader');

    if (loader) {
      loader.style.opacity = '0';

      setTimeout(function() {
        loader.style.display = 'none';
      }, 1000); // Збільшено затримку до 1 секунди
    }
  }, 500); // Затримка 500 мс
});
