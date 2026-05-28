'use strict';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-menu');
const logo = document.querySelector('.header__logo');
const topBar = document.querySelector('.header__top-bar');
const menuLinks = document.querySelectorAll('.menu__link');
const overlay = document.querySelector('.overlay');

// ====================== INIT =====================
if (burger && menu && logo && topBar) {
  burger.addEventListener('click', toggleMenu);
}

// ====================== MENU ======================
function toggleMenu() {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header-menu--open');
  logo.classList.toggle('is-hidden');

  document.body.classList.toggle('no-scroll');
  overlay.classList.toggle('is-active');

  if (!menu.classList.contains('header-menu--open') && window.scrollY > 0) {
    topBar.classList.add('is-hidden');
  } else {
    topBar.classList.remove('is-hidden');
  }
}

// ====================== OVERLAY CLOSE ======================

if (overlay) {
  overlay.addEventListener('click', closeMenu);
}

function closeMenu() {
  burger.classList.remove('burger--active');
  menu.classList.remove('header-menu--open');
  logo.classList.remove('is-hidden');

  document.body.classList.remove('no-scroll');
  overlay.classList.remove('is-active');

  if (window.scrollY > 0) {
    topBar.classList.add('is-hidden');
  }
}

// ====================== SMOOTH SCROLL ======================

function smoothScroll(target, duration = 1800) {
  const targetPosition =
    target.getBoundingClientRect().top + window.pageYOffset;

  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;

  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }

    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, startPosition + distance * easeInOut(progress));

    if (timeElapsed < duration) {
      // eslint-disable-next-line no-undef
      requestAnimationFrame(animation);
    }
  }

  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  // eslint-disable-next-line no-undef
  requestAnimationFrame(animation);
}

// ====================== MENU LINKS ======================

menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));

    if (target) {
      smoothScroll(target, 1800);
    }

    closeMenu();
  });
});

// ====================== HEADER SCROLL ======================

window.addEventListener('scroll', () => {
  if (window.scrollY > 0 && !menu.classList.contains('header-menu--open')) {
    topBar.classList.add('is-hidden');
  } else {
    topBar.classList.remove('is-hidden');
  }
});
