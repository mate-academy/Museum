// 'use strict';
import Swiper from 'swiper';

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const html = document.querySelector('html');
const darkBackground = document.querySelector('.dark-background');
const navLink = document.querySelectorAll('.nav__link');

const toggleMobileMenu = () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  html.classList.toggle('active');
  darkBackground.classList.toggle('active');
};

const removeMobileMenu = () => {
  burger.classList.remove('active');
  mobileMenu.classList.remove('active');
  html.classList.remove('active');
  darkBackground.classList.remove('active');
};

burger.addEventListener('click', (event) => {
  event.preventDefault();

  toggleMobileMenu();
});

navLink.forEach((navLink) => {
  navLink.addEventListener('click', (event) => {
    removeMobileMenu();
  });
});

darkBackground.addEventListener('click', (event) => {
  event.preventDefault();

  removeMobileMenu();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    removeMobileMenu();
  }
});
