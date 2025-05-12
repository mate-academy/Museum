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
  let swiper = null;

  function initOrDestroySwiper() {
    const screenWidth = window.innerWidth;
    const swiperContainer = document.querySelector('.gallery__slider.swiper');

    if (screenWidth < 1024) {
      if (!swiper) {
        swiper = new Swiper('.gallery__slider.swiper', {
          observer: true,
          observeParents: true,
          slidesPerView: 1,
          spaceBetween: 16,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    } else {
      if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
      }
    }
  }

  // Инициализация при загрузке
  initOrDestroySwiper();

  // Повторная проверка при изменении размера окна
  window.addEventListener('resize', initOrDestroySwiper);
});





