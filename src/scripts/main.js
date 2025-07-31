'use strict';

const body = document.querySelector('body');

const burgerMenu = document.querySelector('.burger-menu');

const navigation = document.querySelector('.navigation');

const overlay = document.querySelector('.overlay');

const navigationLinks = document
  .querySelectorAll('.navigation__link');

const gallery = document.querySelector('.gallery__inner');
const galleryElements = document.querySelectorAll('.gallery__element');

const pagination = document.querySelector('.pagination');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu--active');
  navigation.classList.toggle('navigation--active');
  overlay.classList.toggle('overlay--active');

  body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
});

navigationLinks.forEach(navigationLink => {
  navigationLink.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu--active');
    navigation.classList.remove('navigation--active');
    overlay.classList.remove('overlay--active');

    body.style.overflow = 'visible';
  });
});

function getPaginationCount() {
  return Math.ceil(gallery.scrollWidth / gallery.offsetWidth);
}

function addPagination() {
  const paginationCount = getPaginationCount();

  for (let i = 0; i < paginationCount; i++) {
    const dot = document.createElement('div');

    dot.className = 'pagination__switch';

    dot.addEventListener('click', () => {
      gallery.scrollTo({
        left: i * gallery.offsetWidth,
        behavior: 'smooth',
      })
    });

    pagination.append(dot);
  }
}

addPagination();

function addActiveClassToPaginationSwitch() {
  const dots = document.querySelectorAll('.pagination__switch');

  const visibleWidth = gallery.offsetWidth;

  const scrollLeft = gallery.scrollLeft;

  const currentActiveEl = Math.ceil(scrollLeft / visibleWidth)

  dots.forEach(((dot, index) => {
    dot.classList.toggle('pagination__switch--active', index === currentActiveEl);
  }));
}

addActiveClassToPaginationSwitch();

gallery.addEventListener('scroll', addActiveClassToPaginationSwitch);

window.addEventListener('resize', () => {
  pagination.innerHTML = '';

  addPagination();
  addActiveClassToPaginationSwitch();
})
