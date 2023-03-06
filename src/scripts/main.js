'use strict';
// import Swiper from '';
// https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js

window.onhashchange = (e) => {
  const menu = e.newURL.includes('#menu')
    ? document.body.classList.add('page--background')
    : document.body.classList.remove('page--background');

  return menu;
};

// swiper
// const swiper = new Swiper('.swiper', {
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   breakpoints: {
//     320: {
//       slidesPerView: 1.02,
//       spaceBetween: 16,
//     },
//     480: {
//       slidesPerView: 2.02,
//       spaceBetween: 20,
//     },
//   },
// });

// let rez = window.innerWidth > 1024 ? swiper.disable() : swiper.enable();

// swiper.on('resize', () => {
//   rez = window.innerWidth > 1024 ? swiper.disable() : swiper.enable();

//   return rez;
// });
