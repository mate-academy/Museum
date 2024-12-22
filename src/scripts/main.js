'use strict';

import animateHeroContent from './hero-animation';
import setupMenuToggle from './menu';
import initEventsGallery from './events';
import './swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  animateHeroContent('.hero__content');
  setupMenuToggle('.menu-toggle', '.link', 'lock-scroll');
  initEventsGallery();
});
