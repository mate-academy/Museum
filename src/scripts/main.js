/* eslint-disable padding-line-between-statements */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-new */

'use strict';

window.addEventListener('DOMContentLoaded', () => {
  // ===============================
  // STATE
  // ===============================
  const state = {
    loader: {
      element: document.querySelector('.loader'),
      timeReady: 1200,
    },
    header: document.querySelector('.header'),
    gallery: document.querySelector('.gallery'),
  };

  // ===============================
  // LOADER
  // ===============================
  const loaderInit = ({ element, timeReady }) => {
    if (!element) {
      return;
    }

    setTimeout(() => document.body.classList.add('body--ready'), timeReady);
  };
  loaderInit(state.loader);

  // ===============================
  // HEADER
  // ===============================
  const headerInit = (header) => {
    if (header) {
      const burgerBtn = header.querySelector('.header__burger');
      const layer = header.querySelector('.header__layer');
      const links = header.querySelectorAll('.header__link');

      // toggle menu
      const toggleMenu = () => {
        document.body.classList.toggle('body--lock');
        header.classList.toggle('header--menu-open');
      };

      // close menu
      const closeMenu = () => {
        document.body.classList.remove('body--lock');
        header.classList.remove('header--menu-open');
      };

      // events
      burgerBtn.addEventListener('click', toggleMenu);
      layer.addEventListener('click', closeMenu);
      links.forEach(link => link.addEventListener('click', closeMenu));
    }
  };
  headerInit(state.header);

  // ===============================
  // GALLERY SWIPER
  // ===============================
  const gallerySwiperInit = (gallery) => {
    if (gallery) {
      const swiper = gallery.querySelector('.gallery__mobile');
      const swiperPagination = gallery.querySelector('.gallery__pagination');
      const swiperOptions = {
        slidesPerView: 'auto',
        loop: true,
        speed: 700,
        pagination: {
          el: swiperPagination,
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          320: {
            spaceBetween: 16,
          },
          575: {
            spaceBetween: 20,
          },
        },
      };

      new Swiper(swiper, swiperOptions);
    }
  };
  gallerySwiperInit(state.gallery);
});
