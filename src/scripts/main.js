import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const galery = document.querySelector('.galery');
const slider = galery?.querySelector('.swiper');

let swiperInstance = null;

function iniOrDestroySwiper() {
  const isDesktop = window.innerWidth >= 1280;

  if (!slider) {
    return;
  }

  if (isDesktop && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;

    return;
  }

  if (!isDesktop && !swiperInstance) {
    swiperInstance = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: galery.querySelector('.swiper-pagination'),
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 2},
      },
    });
  }
}
iniOrDestroySwiper();
window.addEventListener('resize', iniOrDestroySwiper);

const burger = document.querySelector('.header-top__burger');
const menu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('.body');
const navLinks = document.querySelectorAll('.menu__link');

burger.addEventListener('click', () => {
  burger.classList.toggle('header-top__burger--active');
  menu.classList.toggle('nav-menu--open');
  overlay.classList.toggle('overlay--active');
  body.classList.toggle('body--locked');
});

function closeMenu() {
  burger.classList.remove('header-top__burger--active');
  menu.classList.remove('nav-menu--open');
  overlay.classList.remove('overlay--active');
  body.classList.remove('body--locked');
}

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
