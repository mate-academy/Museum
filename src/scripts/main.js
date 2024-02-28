'use strict';
'use strict';

// eslint-disable-next-line
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});

window.addEventListener('hashchange', function () {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page-body');
  } else {
    document.body.classList.remove('page-body');
  }
});
