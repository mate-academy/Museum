'use strict';


window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const eventsSection = document.getElementById('events');
  const headerLogo = document.querySelector('.header__logo');

  if (window.scrollY > eventsSection.getBoundingClientRect().top) {
    header.classList.add('header-scrolled');
    headerLogo.classList.add('header__logo--scrolled');
  } else {
    header.classList.remove('header-scrolled');
    headerLogo.classList.remove('header__logo--scrolled');
  }
});

const swiper = new Swiper('.gallery__swiper', {
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 15,
  centeredSlides: true,
  loopAdditionalSlides: 4,
  breakpoints: {
    640: {
      centeredSlides: false,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: '.gallery__swiper-pagination',
    clickable: true,
    bulletClass: 'gallery__swiper-bullet',
    bulletActiveClass: 'gallery__swiper-bullet--active',
  },
});
