'use strict';

const gallerySwiper = new Swiper('.gallery-swiper', {
  slidesPerView: 1.3,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
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
  },
});

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(e.target.email.value);

  e.target.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-up');

  const onScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;

    fadeEls.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < triggerBottom) {
        element.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', onScroll);
  onScroll();
});
