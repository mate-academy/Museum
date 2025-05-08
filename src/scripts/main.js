'use strict';

const aside = document.querySelector('.aside');
const menuON = document.querySelector('.header__menu');
const menuOff = document.querySelector('.menu__button');
const asideClose = document.querySelectorAll('.menu__galereyFoto__links');

menuON.addEventListener('click', () => {
  aside.classList.add('aside__open');
});

menuOff.addEventListener('click', () => {
  aside.classList.remove('aside__open');
});

asideClose.forEach(link => {
  link.addEventListener('click', () => {
    aside.classList.remove('aside__open');
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.gallery__slider.swiper', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  },
  )
})





