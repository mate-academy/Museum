'use strict';

const scrollTopButton = document.querySelector('.footer__scroll-top');

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
