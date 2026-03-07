/* global Swiper */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.swiper-slide');

  const gallerySwiper = new Swiper('.gallery__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },

    pagination: {
      el: '.gallery__pagination',
      clickable: true,
      dynamicBullets: false,
    },

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    effect: 'slide',

    speed: 600,

    loop: true,
    loopAdditionalSlides: 1,

    centeredSlides: false,

    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 2,
    },

    keyboard: {
      enabled: true,
    },

    mousewheel: {
      invert: false,
      forceToAxis: true,
    },

    grabCursor: true,

    parallax: true,
  });

  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      gallerySwiper.autoplay.stop();
    });
  });
});

const subscribeForm = document.querySelector('.subscribe__form');

if (subscribeForm) {
  subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    subscribeForm.reset();
  });
}

const burgerButton = document.querySelector('.top-bar__menu');
const closeButton = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__link');
const menu = document.querySelector('.menu');

burgerButton.addEventListener('click', () => {
  menu.classList.add('is-open');
  menu.classList.remove('is-close');
  document.body.classList.add('no-scroll');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('is-open');
  menu.classList.add('is-close');
  document.body.classList.remove('no-scroll');
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menu.classList.add('is-close');
    document.body.classList.remove('no-scroll');
  });
});
