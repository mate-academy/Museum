'use strict';

// const menu = document.querySelector('.menu');
// const pageBody = document.querySelector('.page__body');

// menu.addEventListener('click', function() {
//   page.classList.toggle('page__body--with-menu');
// })

// console.log(menu);
// console.log(pageBody);

// menu.addEventListener('click', function() {
//   const hasClass = pageBody.classList.contains('page__body--with-menu');

//   if (!hasClass) {
//       pageBody.classList.add('page__body--with-menu');
//   } else {
//       pageBody.classList.remove('page__body--with-menu');
//   }
// });

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
