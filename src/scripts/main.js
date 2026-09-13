'use strict';

import Swiper from 'swiper';
import { Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const tabletBP = 768;
const desktopBP = 1280;

let gallerySwiper = null;

const gallerySection = document.getElementById('gallery');

function initGallerySwiper() {
  const isDesktop = window.innerWidth >= desktopBP;

  if (isDesktop) {
    if (gallerySwiper) {
      gallerySwiper.destroy(true, true);
      gallerySwiper = null;
    }

    if (gallerySection) {
      gallerySection.classList.add('gallery--grid');
    }

    return;
  }

  if (gallerySection) {
    gallerySection.classList.remove('gallery--grid');
  }

  if (gallerySwiper) {
    return;
  }

  gallerySwiper = new Swiper('#gallery .swiper', {
    modules: [Pagination, Keyboard],
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 16,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    pagination: {
      el: '.swiper-dots',
      clickable: true,
      bulletClass: 'swiper-dots-bullet',
      bulletActiveClass: 'swiper-dots-bullet--active',
    },

    breakpoints: {
      [tabletBP]: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 20,
      },
    },
  });
}

const subscriptionForm = document.querySelector('.subs__form');

subscriptionForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  subscriptionForm.reset();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('DOMContentLoaded', initGallerySwiper);
window.addEventListener('resize', initGallerySwiper);
