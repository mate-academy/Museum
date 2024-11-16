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
// form.addEventListener('submit', submitForm);


/* --- */

$('.slider').slick({
  arrows: false,
  dots: true,
  adaptiveHeight: true,
  slidesToShow: 2,
  // slidesToScroll: 1,
  // infinite: true,

});



// $('.responsive').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//       }
//     }
//   ]
// });
