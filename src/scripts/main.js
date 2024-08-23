'use strict';

const button = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

const carousel = document.querySelector('.gallery-slider');
const carouselTrack = document.querySelector('.gallery-track');
let pagination;
let pages;
let currentPageIndex = 0;

const screenSizes = {
  smallScreen: window.matchMedia("(max-width: 767px)"),
  mediumScreen: window.matchMedia("(min-width: 768px) and (max-width: 1023px)"),
  largeScreen: window.matchMedia("(min-width: 1024px)"),
};

for (const key in screenSizes) {
  screenSizes[key].addEventListener('change', () => handleScreenSize(screenSizes));
}

handleScreenSize(screenSizes);

function handleScreenSize(obj) {
  for (const key in obj) {
    if (obj[key].matches) {
      switch (key) {
        case 'smallScreen':
          createPagination();
          break;

        case 'mediumScreen':
          createPagination();
          break;

        case 'largeScreen':
          if (!pagination) {
            return;
          } else {
            pagination.removeEventListener('touchstart', handlePaginationTouch);
            pagination.remove();
          }
          break;

          default:
            break;
      }
    }
  }
}

function createPagination(e) {
  if (pagination) {
    pagination.removeEventListener('touchstart', handlePaginationTouch);
    pagination.remove();
  }

  const numberOfPages = Math.round(carouselTrack.scrollWidth / carousel.clientWidth);
  pagination = document.createElement('ul');
  pagination.classList.add('gallery-pagination');

  for (let i = 0; i < numberOfPages; i++) {
    const page = document.createElement('li');
    page.classList.add('gallery-pagination__item');
    page.setAttribute('data-index', i);
    pagination.append(page);
  }

  pagination.firstElementChild.classList.add('gallery-pagination__item--active')
  carousel.append(pagination);
  pages = pagination.children;

  carouselTrack.removeEventListener('scroll', onScroll);
  carouselTrack.addEventListener('scroll', onScroll);

  pagination.addEventListener('touchstart', handlePaginationTouch);
}

let isScrolling;

function onScroll() {
  if (isScrolling) return;
  isScrolling = true;

  setTimeout(() => {
    const colGap = getComputedStyle(carouselTrack).columnGap;
    const requestedPageIndex = Math.round((carouselTrack.scrollLeft - (+colGap.slice(0, -2))) / carousel.clientWidth);
    if (currentPageIndex !== requestedPageIndex) {
      pages[currentPageIndex].classList.remove('gallery-pagination__item--active');
      pages[requestedPageIndex].classList.add('gallery-pagination__item--active');
      currentPageIndex = requestedPageIndex;
    }
    isScrolling = false;
  }, 50);
}

function handlePaginationTouch(event) {
  if (event.target.classList.contains('gallery-pagination__item')) {
    toggleActivity(event.target.dataset.index);
  }
}

function toggleActivity(index) {
  const selectedIndex = Number(index);
  for (let i = 0; i < pages.length; i++) {
    if (i === selectedIndex) {
      pages[i].classList.add('gallery-pagination__item--active');
      carouselTrack.scrollLeft = carousel.clientWidth * i;
    } else {
      pages[i].classList.remove('gallery-pagination__item--active');
    }
  }
}
