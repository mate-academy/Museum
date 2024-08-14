'use strict';

new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  spaceBetween: 16,
  grabCursor: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      init: false,
    },
  },
});

const paginationEl = document.querySelector('.swiper-pagination');

if (paginationEl) {
  paginationEl.style.setProperty('--swiper-pagination-bullet-horizontal-gap', '11px');
  paginationEl.style.setProperty('--swiper-pagination-bottom', '-30px');
}

const btnScrollTop = document.querySelector('.scroll-to-top');

const scrollHandler = () => {
  const scrollPosition = window.scrollY
  if ( scrollPosition > 0) {
    btnScrollTop.style.display = 'block'
  } else {
    btnScrollTop.style.display = 'none'
  }
}

const scrollTop = () => {
  window.scrollTo(0, 0);
}

document.addEventListener('scroll', scrollHandler);
window.onload = scrollHandler

btnScrollTop.addEventListener('click', scrollTop);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

