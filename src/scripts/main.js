'use strict';

import '../styles/base/_styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.header__menu-button');

  if (menuBtn) {
    menuBtn.onclick = () => {
      document.body.classList.toggle('is-locked');
      document.querySelector('.menu').classList.toggle('is-active');
    };
  }

  const closeElements = document.querySelectorAll('.menu__link, .menu__close');

  closeElements.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('is-locked');

      const menu = document.querySelector('.menu');

      if (menu) {
        menu.classList.remove('is-active');
      }
    });
  });
});
