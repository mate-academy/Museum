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
});
