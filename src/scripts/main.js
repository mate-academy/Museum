'use strict';
const TABLET_MIN_WIDTH = 767;

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
  }

  updateStyles();

  window.addEventListener('resize', () => {
    if (window.innerWidth !== lastWidth) {
      lastWidth = window.innerWidth;
      updateStyles();
    }
  });

  const menuButton = document.querySelector('.header__icon');
  const menuCloseButton = document.querySelector('.menu__icon');
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

  if (menuCloseButton) {
    menuCloseButton.addEventListener('click', closeMenu);
  }

  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    const isClickInsideMenu = pageMenu && pageMenu.contains(event.target);
    const isClickOnMenuButton = menuButton && menuButton.contains(event.target);
    const isClickOnMenuCloseButton = menuCloseButton && menuCloseButton.contains(event.target);

    if (pageMenu && !isClickInsideMenu && !isClickOnMenuButton && !isClickOnMenuCloseButton) {
      closeMenu();
    }
  });
});
