import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

let gallerySwiper = null;

const desktopMedia = window.matchMedia('(min-width: 1200px)');

function initGallery() {
  if (!desktopMedia.matches && !gallerySwiper) {
    gallerySwiper = new Swiper('.gallery__swiper', {
      modules: [Pagination],

      slidesPerView: 1.1,
      spaceBetween: 16,
      loop: true,

      breakpoints: {
        768: {
          slidesPerView: 2.1,
          spaceBetween: 16,
        },
      },

      pagination: {
        el: '.gallery__swiper .swiper-pagination',
        clickable: true,
      },
    });
  }

  if (desktopMedia.matches && gallerySwiper) {
    gallerySwiper.destroy(true, true);
    gallerySwiper = null;
  }
}

initGallery();

desktopMedia.addEventListener('change', initGallery);

/* page-animation-scroll */

const toTop = document.querySelector('.footer__to-top');

toTop?.addEventListener('click', (event) => {
  event.preventDefault();

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.scrollTo({ top: 0, behavior: 'auto' });

    return;
  }

  const start = window.scrollY;
  const duration = 1300;
  let startTime = null;

  function animateScroll(timestamp) {
    if (startTime === null) {
      startTime = timestamp;
    }

    const progress = Math.min((timestamp - startTime) / duration, 1);

    const ease = 0.5 - Math.cos(progress * Math.PI) / 2;

    window.scrollTo(0, start * (1 - ease));

    if (progress < 1) {
      window.requestAnimationFrame(animateScroll);
    }
  }

  window.requestAnimationFrame(animateScroll);
});
