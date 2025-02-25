'use strict';

const closeMenu = document.querySelector('.menu__button-icon');
const openMenu = document.querySelector('.header__menu-button');
const menu = document.querySelector('.menu');
const emailForm = document.querySelector('.main__subscription-form');
const emailInput = document.querySelector('.main__subscription-input');
const page = document.querySelector('.page');
const menuLinks = document.querySelector('.menu__list');

emailForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (emailInput.value.trim() === '') {
    emailInput.placeholder = 'Please enter your email';
    emailInput.classList.add('main__subscription-input--error');

    return;
  }

  if (
    !emailInput.value.trim().includes('@') &&
    emailInput.value.trim() !== ''
  ) {
    emailInput.value = '';
    emailInput.placeholder = 'Please enter a valid email';

    if (!emailInput.classList.contains('main__subscription-input--error')) {
      emailInput.classList.add('main__subscription-input--error');
    }

    return;
  }

  emailInput.placeholder = 'Thank you for subscription!';
  emailInput.classList.add('main__subscription-input--success');
  emailInput.value = '';
});

emailInput.addEventListener('focus', () => {
  emailInput.classList.remove('main__subscription-input--error');
  emailInput.classList.remove('main__subscription-input--success');
  emailInput.placeholder = 'Enter your email';
});

emailInput.addEventListener('blur', () => {
  emailInput.classList.remove('main__subscription-input--error');
  emailInput.classList.remove('main__subscription-input--success');
  emailInput.placeholder = 'E-mail';
});

function openMenuClick() {
  menu.classList.add('menu--open');
  page.classList.add('page--no-scroll');
}

function closeMenuClick() {
  menu.classList.remove('menu--open');
  page.classList.remove('page--no-scroll');
}

openMenu.addEventListener('click', openMenuClick);
closeMenu.addEventListener('click', closeMenuClick);

menuLinks.addEventListener('click', (event) => {
  if (event.target.closest('.menu__link')) {
    closeMenuClick();
  }
});

const list = document.querySelector('.main__galary-list');
const slides = document.querySelectorAll('.main__galary-item');
const dots = document.querySelectorAll('.main__galary-dot');
const arrowLeft = document.querySelector('.main__galary-arrow--left');
const arrowRight = document.querySelector('.main__galary-arrow--right');

let currentSlide = 0;

function scrollToCurrentSlide() {
  slides[currentSlide].scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'start',
  });
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('main__galary-dot--active');
    } else {
      dot.classList.remove('main__galary-dot--active');
    }
  });
}

arrowRight.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    scrollToCurrentSlide();
  } else {
    currentSlide = 0;
    scrollToCurrentSlide();
  }
});

arrowLeft.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    scrollToCurrentSlide();
  } else {
    currentSlide = slides.length - 1;
    scrollToCurrentSlide();
  }
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    scrollToCurrentSlide();
  });
});
