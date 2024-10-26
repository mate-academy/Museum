'use strict';

const overlay = document.querySelector('.page__overlay');
const activateOverlay = document.querySelector('.museum__icon');
const activationOverlay = document.querySelector('.header__icon');
const disableOverlay = document.querySelector('.menu__icon');
const body = document.querySelector('body');
activateOverlay.addEventListener('click', () => {
overlay.style.opacity = 1;
overlay.style.pointerEvents = "auto";
body.style.height = "100%";
body.style.overflowY = "hidden";
});
activationOverlay.addEventListener('click', () => {
overlay.style.opacity = 1;
overlay.style.pointerEvents = "auto";
body.style.height = "100%";
body.style.overflowY = "hidden";
});
disableOverlay.addEventListener('click', () => {
overlay.style.opacity = 0;
overlay.style.pointerEvents = "none";
body.style.height = "unset";
body.style.overflowY = "auto";
});
