'use strict';

(function burger() {
  const body = document.querySelector('body');
  const burgerButton = document.querySelector('.header__burger-button');
  const header = document.querySelector('.header');

  if (burgerButton) {
    burgerButton.addEventListener('click', (e) => {
      e.stopPropagation();

      const scrollBarWidth
        = window.innerWidth - document.documentElement.clientWidth;

      document.documentElement.classList.toggle('menu-open');

      if (document.querySelector('.menu-open')) {
        body.style.paddingRight = `${scrollBarWidth}px`;

        window.addEventListener('click', () => {
          if (!e.target.closest('.header__menu')) {
            document.documentElement.classList.remove('menu-open');
            body.style.paddingRight = '0';
          }
        });
      } else {
        body.style.paddingRight = '0';
      }
    });
  }

  if (header) {
    header.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        document.documentElement.classList.remove('menu-open');
        body.style.paddingRight = '0';
      }
    });
  }
})();
