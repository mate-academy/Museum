'use strict';

import animateHeroContent from './hero-animation';
import setupMenuToggle from './menu';
import initEventsGallery from './events';
import './swiper';
import sendForm from './form';
const scrollToTopButton = document.getElementById('scrollToTop');

document.addEventListener('DOMContentLoaded', () => {
  animateHeroContent('.hero__content');
  setupMenuToggle('.menu-toggle', '.link', 'lock-scroll');
  initEventsGallery('[data-fancybox="events-gallery"]');
  sendForm('.contacts__form', '#email');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
