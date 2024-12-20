'use strict';
import animateHeroContent from './hero-animation';
import setupMenuToggle from './menu';

document.addEventListener('DOMContentLoaded', () => {
  animateHeroContent('.hero__content');
  setupMenuToggle('.menu-toggle', '.link', 'lock-scroll');
});
