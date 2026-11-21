'use strict';

const menuButton = document.querySelector('.header__menu-button');
const closeButton = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.menu-overlay');
const menuLinks = document.querySelectorAll('.menu__link');

function openMenu() {
  menu.classList.add('is-open');
  overlay.classList.add('is-open');
  document.body.classList.add('menu-open');

  menu.removeAttribute('inert');
  menu.setAttribute('aria-hidden', 'false');
  menuButton.setAttribute('aria-expanded', 'true');

  closeButton.focus();
}

function closeMenu(restoreFocus = true) {
  if (restoreFocus) {
    menuButton.focus();
  }

  menu.classList.remove('is-open');
  overlay.classList.remove('is-open');
  document.body.classList.remove('menu-open');

  menu.setAttribute('inert', '');
  menu.setAttribute('aria-hidden', 'true');
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', openMenu);

closeButton.addEventListener('click', () => {
  closeMenu();
});

overlay.addEventListener('click', () => {
  closeMenu();
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu(false);
  });
});

document.addEventListener('keydown', event => {
  if (
    event.key === 'Escape'
    && menu.classList.contains('is-open')
  ) {
    closeMenu();
  }
});

const subscriptionForm = document.querySelector('.subscription__form');

if (subscriptionForm) {
  subscriptionForm.addEventListener('submit', event => {
    event.preventDefault();
    subscriptionForm.reset();
  });
}
