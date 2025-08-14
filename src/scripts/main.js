'use strict';
const TABLET_MIN_WIDTH = 767;
const DESKTOP_MIN_WIDTH = 1280;

document.addEventListener('DOMContentLoaded', () => {
  const headerEvents = document.querySelector('.header__events');
  const eventsSection = document.getElementById('events');

  if (headerEvents && eventsSection) {
    headerEvents.addEventListener('click', () => {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  let lastWidth = window.innerWidth;

  function updateStyles() {
    const header = document.querySelector('.header');
    const headerImage = document.querySelector('.header__image');
    const lectureSpace = document.querySelector('.events__space');
    const lectureCard = document.querySelector('.lecture__card');
    const galleryGrid = document.querySelector('.gallery-grid');
    const slider = document.querySelector('.gallery__image-slider');

    if (window.innerWidth > TABLET_MIN_WIDTH) {
      if (header && headerImage) {
        const marginRight = window.getComputedStyle(header).getPropertyValue('margin-right');
        const marginRightValue = parseFloat(marginRight);
        headerImage.style.width = `calc(100% + ${marginRightValue}px)`;
      }
    } else {
      if (headerImage) {
        headerImage.style.width = '';
      }
    }

    if (galleryGrid) {
      if (window.innerWidth >= DESKTOP_MIN_WIDTH) {
          galleryGrid.style.display = '';
          slider.style.display = 'none'
        } else {
          slider.style.display = '';
          galleryGrid.style.display = 'none';
      }
  }

    if (lectureSpace && lectureCard) {
      const lectureCardHeight = lectureCard.offsetHeight;

      if (window.innerWidth >= DESKTOP_MIN_WIDTH) {
        lectureSpace.style.height = `${Math.round(0.5 * lectureCardHeight)}px`;
      } else {
        lectureSpace.style.height = `${Math.round(0.6 * lectureCardHeight)}px`;
      }
    }
  }

  updateStyles();


  window.addEventListener('resize', () => {
    if (window.innerWidth !== lastWidth) {
      lastWidth = window.innerWidth;
      updateStyles();
    }
  });

  const menuButton = document.querySelector('.header__icon');
  const menuCloseButtons = document.querySelectorAll('.menu__icon');
  const pageMenu = document.querySelector('.page__menu');

  function toggleMenu() {
    if (pageMenu) {
      pageMenu.classList.toggle('is-active');
    }
  }

  function closeMenu() {
    if (pageMenu) {
      pageMenu.classList.remove('is-active');
    }
  }

  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
  }

  menuCloseButtons.forEach(button => {
    button.addEventListener('click', closeMenu);
  });

  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    const isClickInsideMenu = pageMenu && pageMenu.contains(event.target);
    const isClickOnMenuButton = menuButton && menuButton.contains(event.target);
    const isClickOnMenuCloseButton = menuCloseButtons.length > 0 &&
    Array.from(menuCloseButtons).some(button => button.contains(event.target));


    if (pageMenu && !isClickInsideMenu && !isClickOnMenuButton && !isClickOnMenuCloseButton) {
      closeMenu();
    }
  });
});

const swiper = new Swiper('.image-slider', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1.07,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.09,
    }
  }
});
