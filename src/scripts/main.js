'use strict';

// const swiper = new swiper('.swiper', {

//   direction: 'horizontally',
//   loop: true,

//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

const form = document.querySelector('.subscription__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__with-menu');
  } else {
    document.body.classList.remove('page__with-menu');
  }
});
