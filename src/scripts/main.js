'use strict';

import { burgerMenu } from './utils/burgerMenu';
import { swiper } from './utils/swiper';
import { initWow } from './utils/animationInit';

document.addEventListener('DOMContentLoaded', () => {
  initWow();
  burgerMenu();
  swiper();
});
