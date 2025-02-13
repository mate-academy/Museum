'use strict';

const menuBtn = document.querySelector('.header__menu');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const closeBtn = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__link');

menuBtn.addEventListener('click', () => {
  menu.style.transform = 'translateX(0)';
  menuBtn.style.display = 'none';
  overlay.style.background = 'rgba(0, 0, 0, 0.5)';
  overlay.style.zIndex = '2';
  body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  closeMenu();
});

overlay.addEventListener('click', () => {
  closeMenu();
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

function closeMenu() {
  menu.style.transform = 'translateX(-100%)';
  menuBtn.style.display = 'block';
  overlay.style.background = 'transparent';
  overlay.style.zIndex = '-1';
  body.style.overflow = 'auto';
}

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  window.alert('Form submitted!');
  form.reset();
});
