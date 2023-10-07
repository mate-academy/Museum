'use strict';
const scrollDispatcherConfig = {
  /**
   * Controls the speed of scrolling.
   *
   * `speed: 1` - scrolls instantly
   *
   * `speed: 2000` - very smooth
   */
  speed: 11900,
  noHeader: true,
  offsetTop: 0,
};

export default scrollDispatcherConfig;

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
      }, 1000);
    }
  }, 500);
});
