import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const DESKTOP_WIDTH = 1280;

function initSliders() {
  const slider = document.querySelector('[data-fls-slider]');

  if (!slider) {
    return;
  }

  new Swiper(slider, {
    modules: [Navigation, Pagination],
    observer: true,
    observeParents: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 16,
    speed: 800,
    navigation: {
      prevEl: '[data-fls-slider-prev]',
      nextEl: '[data-fls-slider-next]',
    },
    pagination: {
      el: '[data-fls-slider-pagination]',
      clickable: true,
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
      },
      [DESKTOP_WIDTH]: {
        enabled: false,
        spaceBetween: 0,
      },
    },
  });
}

window.addEventListener('load', initSliders);
