'use strict';

const openNavButton = document.querySelector('.header__open-nav');
const nav = document.querySelector('.nav');
const navCloseButton = document.querySelector('.nav__close');
const navLinks = [...document.querySelectorAll('.nav__link')];
const closeNav = () => {
  nav.classList.remove('nav--open');
};

const openNav = () => {
  nav.classList.add('nav--open');
};

navLinks.forEach(navLink => navLink.addEventListener('click', closeNav));
openNavButton.addEventListener('click', openNav);
navCloseButton.addEventListener('click', closeNav);
