/* eslint-disable padding-line-between-statements */
/* eslint-disable max-len */
'use strict';

window.addEventListener('DOMContentLoaded', () => {
  // ===============================
  // STATE
  // ===============================
  const state = {
    loader: {
      element: document.querySelector('.loader'),
      timeReady: 1200,
    },
    header: document.querySelector('.header'),
  };

  // ===============================
  // LOADER
  // ===============================
  const loaderInit = ({ element, timeReady }) => {
    if (!element) {
      return;
    }

    setTimeout(() => document.body.classList.add('body--ready'), timeReady);
  };
  loaderInit(state.loader);

  // ===============================
  // HEADER
  // ===============================
  const headerInit = (header) => {
    if (header) {
      const burgerBtn = header.querySelector('.header__burger');
      const layer = header.querySelector('.header__layer');

      // toggle menu
      const toggleMenu = () => {
        document.body.classList.toggle('body--lock');
        header.classList.toggle('header--menu-open');
      };

      // close menu
      const closeMenu = () => {
        document.body.classList.remove('body--lock');
        header.classList.remove('header--menu-open');
      };

      // events
      burgerBtn.addEventListener('click', toggleMenu);
      layer.addEventListener('click', closeMenu);
    }
  };
  headerInit(state.header);
});
