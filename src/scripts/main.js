'use strict';

const aside = document.querySelector('.aside');
const menuON = document.querySelector('.header__menu');
const menuOff = document.querySelector('.menu__button');
const asideClose = document.querySelectorAll('.menu__galereyFoto__links');

document.querySelector('.subscribe__form__button').addEventListener(
  'click',
  function (e) {
    e.preventDefault();
  }
);

menuON.addEventListener('click', () => {
  aside.classList.add('aside__open');
  document.body.style.overflow = 'hidden';
});

menuOff.addEventListener('click', () => {
  aside.classList.remove('aside__open');
  document.body.style.overflow = '';
});

asideClose.forEach(link => {
  link.addEventListener('click', () => {
    aside.classList.remove('aside__open');
    document.body.style.overflow = '';
  });
});


document.addEventListener('DOMContentLoaded', function () {
  let swiper = null;

  function initOrDestroySwiper() {
    const screenWidth = window.innerWidth;
    const swiperContainer = document.querySelector('.gallery__slider.swiper');

    if (screenWidth < 1280) {
      if (!swiper) {
        swiper = new Swiper('.gallery__slider.swiper', {
          observer: true,
          observeParents: true,
          slidesPerView: 1,
          spaceBetween: 16,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    } else {
      if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
      }
    }
  }

  initOrDestroySwiper();

  window.addEventListener('resize', initOrDestroySwiper);
});





