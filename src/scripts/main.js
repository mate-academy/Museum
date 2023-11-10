'use strict';

(function() {
  'use strict';

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia('(min-width:1280px)');

  // keep track of swiper instances to destroy later
  let mySwiper;

  const breakpointChecker = function() {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) {
        mySwiper.destroy(true, true);
      }
      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  };

  const enableSwiper = function() {
    mySwiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      a11y: true,
      keyboardControl: true,
      grabCursor: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplay: {
        delay: 2000,
      },
    });
  };

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();
})(); /* IIFE end */

/**
 const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 2000,
  },
});
 */

// menu open

const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

// upward
const scroll = document.querySelector('.upward');

window.addEventListener('scroll', () => {
  scroll.classList.toggle('upward--active', window.scrollY > 500);
});

scroll.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
