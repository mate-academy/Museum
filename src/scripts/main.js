'use strict';

const form = document.querySelector('.subscription__form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    return;
  }

  form.reset();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const menuButton = document.querySelector('.header__menu-button');
const menu = document.querySelector('#menu');
const menuCloseButton = menu?.querySelector('.menu__close');
const menuLinks = menu?.querySelectorAll('.menu__link');

const openMenu = () => {
  menu.classList.add('menu--open');

  document.documentElement.classList.add('page--menu-open');
  document.body.classList.add('page--menu-open');
};

const closeMenu = () => {
  menu.classList.remove('menu--open');

  document.documentElement.classList.remove('page--menu-open');
  document.body.classList.remove('page--menu-open');
};

menuButton?.addEventListener('click', openMenu);
menuCloseButton?.addEventListener('click', closeMenu);

menuLinks?.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

const galleryGrid = document.querySelector('.gallery__grid');
const galleryItems = document.querySelectorAll('.gallery__item');
const galleryDots = document.querySelectorAll('.gallery__dot');

let activeSlide = 0;

function showSlide(index) {
  const firstItem = galleryItems[0];
  const currentItem = galleryItems[index];

  if (!currentItem) {
    return;
  }

  activeSlide = index;

  const offset = currentItem.offsetLeft - firstItem.offsetLeft;

  galleryGrid.style.transform = `translateX(-${offset}px)`;

  galleryDots.forEach((dot) => {
    dot.classList.remove('gallery__dot--active');
  });

  galleryDots[index].classList.add('gallery__dot--active');
}

galleryDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

window.addEventListener('resize', () => {
  showSlide(activeSlide);
});

const backToTop = document.querySelector('.back-to-top');

function updateBackToTopColor() {
  const rect = backToTop.getBoundingClientRect();

  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  backToTop.style.pointerEvents = 'none';

  const elementUnderButton = document.elementFromPoint(x, y);

  backToTop.style.pointerEvents = '';

  const isDark = elementUnderButton?.closest('.back-to-top-dark');

  backToTop.classList.toggle('back-to-top--light', Boolean(isDark));
}

window.addEventListener('scroll', updateBackToTopColor);
window.addEventListener('resize', updateBackToTopColor);

updateBackToTopColor();
