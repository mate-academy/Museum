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

  menuLinks.forEach((item) => {
    item.addEventListener('click', closeMenu);
  });
}
function closeMenu() {
  menu.classList.remove('active');
  body.style.overflowY = 'auto';
}

function submitForm() {
  const input = form.querySelector('input');
  input.value = '';
}

menuBurger.addEventListener('click', activeMenu);
menuClose.addEventListener('click', closeMenu);

/* --- */

$('.slider').slick({
  arrows: false,
  dots: true,
  adaptiveHeight: true,
  slidesToShow: 2,
  centerPadding: '20px',
  responsive: [
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    },
  ]
});
