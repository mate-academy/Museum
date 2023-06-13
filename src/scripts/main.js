'use strict';

const scrollTopBtn = document.getElementById('myBtn');

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 1000
    || document.documentElement.scrollTop > 1000) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
// eslint-disable-next-line no-unused-vars
scrollTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

const menu = document.querySelector('.menu');
const burgerMenu = document.querySelector('.header__burger-menu');
const body = document.getElementById('home');
const overlay = document.querySelector('.overlay');
const navLinkHeader = document.querySelectorAll('.nav__link--header');
const events = document.querySelector('.events');
const headerButton = document.querySelector('.header__button');
const form = document.querySelector('.subscription__form');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('header__burger-menu--active');
  menu.classList.toggle('menu--active');
  body.classList.toggle('block-scroll');
  overlay.classList.toggle('overlay--active');
});

navLinkHeader.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu.classList.toggle('header__burger-menu--active');
    menu.classList.toggle('menu--active');
    body.classList.toggle('block-scroll');
    overlay.classList.toggle('overlay--active');
  });
});

headerButton.addEventListener('click', () => {
  events.scrollIntoView({ behavior: 'smooth' });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

// eslint-disable-next-line no-undef, no-unused-vars
const slider = tns({
  container: '.slider',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  autoplayTimeout: 8000,
  controls: false,
  autoplayButtonOutput: false,
  navPosition: 'bottom',
  nav: true,

  responsive: {
    639: {
      items: 2,
    },
  },
});
