'use strict';

let mySwiper = null;

function initSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1280 && !mySwiper) {
    mySwiper = new Swiper('.swiper', {
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2.1,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3.1,
          spaceBetween: 30,
        },
  },
    });
  } else if (screenWidth >= 1280 && mySwiper) {
    mySwiper.destroy(true, true);
    mySwiper = null;
  }
};

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);

const menuOpenBtn = document.querySelector('.header__menu-button');
const menuCloseBtn = document.querySelector('.menu__close-btn');
const body = document.querySelector('.page__body');
const menu = document.querySelector('.page__menu');

menuOpenBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (body.classList.contains('page__body--lock')) {
    body.classList.remove('page__body--lock');
    menu.classList.remove('page__menu--open')
  } else {
    body.classList.add('page__body--lock');
    menu.classList.add('page__menu--open')
  }
});

menuCloseBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  body.classList.remove('page__body--lock');
  menu.classList.remove('page__menu--open')
});

document.addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target !== menuOpenBtn && e.target !== menuCloseBtn && e.target !== menu) {
    body.classList.remove('page__body--lock');
    menu.classList.remove('page__menu--open')
  }
});

document.querySelector('.form').addEventListener('submit', function(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
});
