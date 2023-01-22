'use strict';
// eslint-disable-next-line
const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
*/
