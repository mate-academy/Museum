/* eslint-disable no-console */
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css';
Swiper.use([Pagination, Autoplay]);

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  centeredSlides: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

console.log(swiper);

const buttons = document.querySelectorAll('.header__button');

buttons.forEach((btn) => {
  const icon = btn.querySelector('.header__interaction');

  const on = () => icon.classList.add('header__interaction--rotated');
  const off = () => icon.classList.remove('header__interaction--rotated');

  btn.addEventListener('mouseenter', on);
  btn.addEventListener('mouseleave', off);
  btn.addEventListener('focusin', on);
  btn.addEventListener('focusout', off);
});
