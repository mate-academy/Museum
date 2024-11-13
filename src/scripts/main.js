'use strict';

const menu = document.querySelector('.header__menu');
const menuLinks = menu.querySelectorAll('.menu__link');
const menuBurger = document.querySelector('.header__burder');
const menuClose = document.querySelector('.menu__close');
const body = document.querySelector('.wrapper');

const form = document.querySelector('.subscribe__form');

function activeMenu() {
  menu.classList.add('active');
  body.style.overflowY = 'hidden';

  menuLinks.forEach(item => {
    item.addEventListener('click', closeMenu)
  })
}
function closeMenu() {
  menu.classList.remove('active');
  body.style.overflowY = 'auto';
}

function submitForm() {
  const input = form.querySelector('input');
  input.value = '';
}

menuBurger.addEventListener('click', activeMenu)
menuClose.addEventListener('click', closeMenu)
form.addEventListener('submit', submitForm)


/* swiper-slider */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // Responsive breakpoints
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    720: {
      slidesPerView: 3,
      spaceBetween: 30
    },


  }
})
