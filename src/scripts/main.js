'use strict';

// REGION WRITTEN BY GEMINI
function getPercentUntilVisible(element) {
  const currentScroll = window.scrollY || document.documentElement.scrollTop;

  const elementTop = element.getBoundingClientRect().bottom + currentScroll;

  const targetScroll = elementTop - window.innerHeight;

  if (targetScroll <= 0 || currentScroll >= targetScroll) {
    return 0;
  }

  const remaining = ((targetScroll - currentScroll) / targetScroll) * 100;

  return Math.max(0, Math.min(100, remaining)).toFixed(1);
}
// END REGION WRITTEN BY GEMINI

const eventsBlock = document.querySelector('article');

window.addEventListener('scroll', () => {
  const percentLeft = getPercentUntilVisible(eventsBlock);

  if (percentLeft !== 0) {
    document.documentElement.style.setProperty(
      '--scroll-events-position',
      `${percentLeft}px`,
    );
  }
});

const openMenuButton = document.querySelector('.header__open-menu-button');
const closeMenuButton = document.querySelector(
  '.navigation__close-menu-button',
);
const navigation = document.querySelector('.navigation');

function openMenu() {
  navigation.classList.add('navigation--visible');
}

function closeMenu() {
  navigation.classList.remove('navigation--visible');
}

openMenuButton.addEventListener('click', () => {
  openMenu();
});

closeMenuButton.addEventListener('click', () => {
  closeMenu();
});

document.addEventListener('click', (event) => {
  if (
    !event.target.closest('.navigation') &&
    !event.target.closest('.header__open-menu-button')
  ) {
    closeMenu();
  }
});

let sliderStartX;
const galleryItem = document.querySelector('.gallery__item');
let isGalleryItemTransitioning = false;
let sliderPosition = 0;
let maxSliderPosition = 2;

galleryItem.addEventListener('transitionstart', () => {
  isGalleryItemTransitioning = true;
});

galleryItem.addEventListener('transitionend', () => {
  isGalleryItemTransitioning = false;
});

galleryItem.addEventListener('transitioncancel', () => {
  isGalleryItemTransitioning = false;
});

document.addEventListener('pointerdown', (e) => {
  sliderStartX = e.clientX;
});

function sliderImageSlide() {
  document.querySelector('.gallery__item--1').style.transform =
    `translateX(calc(${(0 - sliderPosition) * 100}% + ${(0 - sliderPosition) * 20}px))`;

  document.querySelector('.gallery__item--2').style.transform =
    `translateX(calc(${(1 - sliderPosition) * 100}% + ${(1 - sliderPosition) * 20}px))`;

  document.querySelector('.gallery__item--3').style.transform =
    `translateX(calc(${(2 - sliderPosition) * 100}% + ${(2 - sliderPosition) * 20}px))`;

  document.querySelector('.gallery__item--4').style.transform =
    `translateX(calc(${(3 - sliderPosition) * 100}% + ${(3 - sliderPosition) * 20}px))`;
}

function sliderUpdateDots() {
  if (document.querySelector(`.gallery__slider-dot--active`)) {
    document
      .querySelector(`.gallery__slider-dot--active`)
      .classList.remove(`gallery__slider-dot--active`);
  }

  document
    .querySelector(`.gallery__slider-dot--${sliderPosition + 1}`)
    .classList.add('gallery__slider-dot--active');
}

function sliderDotDisplay() {
  if (window.innerWidth >= 768) {
    maxSliderPosition = 2;

    if (sliderPosition > maxSliderPosition) {
      sliderPosition = maxSliderPosition;
    }

    sliderImageSlide();
    sliderUpdateDots();
    document.querySelector(`.gallery__slider-dot--4`).style.display = 'none';
  }

  if (window.innerWidth < 768) {
    maxSliderPosition = 3;
    document.querySelector(`.gallery__slider-dot--4`).style.display = 'block';
  }
}

sliderDotDisplay();

window.addEventListener('resize', (e) => {
  sliderDotDisplay();
});

document.addEventListener('pointermove', (e) => {
  if (window.innerWidth <= 1280) {
    if (!isGalleryItemTransitioning) {
      if (e.target.closest('.gallery__track')) {
        if (e.buttons === 0) {
          return;
        }

        const distanceAndDirection = e.clientX - sliderStartX;

        if (distanceAndDirection < 0 && sliderPosition < maxSliderPosition) {
          sliderPosition++;
        }

        if (distanceAndDirection > 0 && sliderPosition > 0) {
          sliderPosition--;
        }

        sliderImageSlide();

        sliderUpdateDots();
      }
    }
  }
});

function scrollTo(block) {
  document
    .querySelector(block)
    .scrollIntoView({ block: 'start', behavior: 'smooth' });
  closeMenu();
}

const galleryLink = document.querySelectorAll('.gallery-link');
const eventsLink = document.querySelectorAll('.events-link');
const contactsLink = document.querySelectorAll('.contacts-link');
const aboutLink = document.querySelectorAll('.about-link');
const footerTopButton = document.querySelector('.footer__top-button');
const logoButton = document.querySelectorAll('.logo-link');

galleryLink.forEach((item) => {
  item.addEventListener('click', () => {
    scrollTo('.gallery-section');
  });
});

eventsLink.forEach((item) => {
  item.addEventListener('click', () => {
    scrollTo('.events-section');
  });
});

aboutLink.forEach((item) => {
  item.addEventListener('click', () => {
    scrollTo('.follow-section');
  });
});

contactsLink.forEach((item) => {
  item.addEventListener('click', () => {
    scrollTo('.footer');
  });
});

footerTopButton.addEventListener('click', () => {
  scrollTo('.header');
});

logoButton.forEach((item) => {
  item.addEventListener('click', () => {
    scrollTo('.header');
  });
});
