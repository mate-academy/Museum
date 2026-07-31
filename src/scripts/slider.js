import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const DESKTOP_WIDTH = 1280;

function initSliders() {
  const slider = document.querySelector('[data-fls-slider]');

  if (!slider) {
    return;
  }

  new Swiper(slider, {
    modules: [Pagination],
    observer: true,
    observeParents: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    speed: 800,
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
