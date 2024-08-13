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
const mediaObject = window.matchMedia("(max-width: 1023px)");

let pagination;
let pages;
let currentPageIndex = 0;

mediaObject.addEventListener('change', createPagination);
createPagination(mediaObject);

function createPagination(mediaObj) {
  if (!mediaObj.matches) {
    return;
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

  carouselTrack.addEventListener('scroll', onScroll);
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


if (pagination) {
  pagination.addEventListener('touchstart', (event) => {
    if (event.target.classList.contains('gallery-pagination__item')) {
      toggleActivity(event.target.dataset.index);
    }
  });
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
