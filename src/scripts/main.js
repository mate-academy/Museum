'use strict';

import animateHeroContent from './hero-animation';
import setupMenuToggle from './menu';
import initEventsGallery from './events';
import './swiper';
import sendForm from './form';

document.addEventListener('DOMContentLoaded', () => {
  animateHeroContent('.hero__content');
  setupMenuToggle('.menu-toggle', '.link', 'lock-scroll');
  initEventsGallery();
  sendForm('.contacts__form', '#email');
});
