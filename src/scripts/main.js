'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body__no-active');
  } else {
    document.body.classList.remove('body__no-active');
  }
});

// eslint-disable-next-line no-undef
new Swiper('.slider', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
}).enable();
