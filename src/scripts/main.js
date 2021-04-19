
'use strict';

const menu = document.querySelector('.header__nav');
const openButton = document.querySelector('.header__burger');
const closeButton = document.querySelector('.nav__close');
const closeLink = document.querySelector('.nav__list--close');

openButton.addEventListener('click', () => {
  menu.classList.add('header__nav--active');
}
);

closeButton.addEventListener('click', () => {
  menu.classList.remove('header__nav--active');
}
);

closeLink.addEventListener('click', () => {
  menu.classList.remove('header__nav--active');
}
);
