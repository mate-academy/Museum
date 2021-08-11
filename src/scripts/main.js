'use strict';

const navigationList = document.querySelector('.header__nav-items');
const checkbox = document.querySelector('.header__nav-toggler');
const headerLogo = document.querySelector('.header__logo');

checkbox.addEventListener('click', () => {
  if (checkbox.checked === true) {
    navigationList.classList.add('header__nav-items--active');
    headerLogo.classList.add('header__logo--hiden');
  }

  if (checkbox.checked === false) {
    navigationList.classList.remove('header__nav-items--active');
    headerLogo.classList.remove('header__logo--hiden');
  }
});

navigationList.addEventListener('click', () => {
  checkbox.checked = false;
  navigationList.classList.remove('header__nav-items--active');
});
