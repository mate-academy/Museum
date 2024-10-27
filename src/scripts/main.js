'use strict';

const overlay = document.querySelector('.page__overlay');
const activateOverlay = document.querySelector('.museum__icon');
const activationOverlay = document.querySelector('.header__icon');
const disableOverlay = document.querySelector('.menu__icon');
const navLinks = document.querySelectorAll('.menu__link');
const body = document.querySelector('body');

function openOverlay() {
  overlay.style.opacity = 1;
  overlay.style.pointerEvents = "auto";
  body.style.height = "100%";
  body.style.overflowY = "hidden";
}

function closeOverlay() {
  overlay.style.opacity = 0;
  overlay.style.pointerEvents = "none";
  body.style.height = "unset";
  body.style.overflowY = "auto";
}

activateOverlay.addEventListener('click', openOverlay);
activationOverlay.addEventListener('click', openOverlay);
disableOverlay.addEventListener('click', closeOverlay);

navLinks.forEach(link => {
  link.addEventListener('click', closeOverlay);
});

