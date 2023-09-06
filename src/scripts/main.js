'use strict';

// Slider
import $ from 'jquery';
import 'slick-carousel';

$('.slider').slick({
  arrows: false,
  dots: true,
  slidesToShow: 2,
  speed: 500,
  easing: 'ease',
  initialSlide: 0,
  autoplay: false,
  autoplaySpeed: 3000,
  variableWidth: true,
});

// Button Bac-To-Top
const backtoTop = document.querySelector('.back-top');

window.addEventListener('scroll', function() {
  window.scrollY >= 500
    ? (backtoTop.style.opacity = '1')
    : (backtoTop.style.opacity = '0');
});

backtoTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

// Unscroll Menu

const body = document.body;
const pageMenu = document.querySelector('.page__menu');
const iconMenu = document.querySelector('.icon--menu');

iconMenu.addEventListener('click', () => {
  body.classList.add('unscroll');
});

pageMenu.addEventListener('click', () => {
  body.classList.remove('unscroll');
});
