'use strict';

const burgerMenu = document.querySelector('.burger-memu');
const navigation = document.querySelector('.header-nav');
const logo = document.querySelector('.header__logo');
const burgerMenuLine = document.querySelector('.burger-memu__line');
const headerNavigation = document.querySelector('.header__nav');

burgerMenu.addEventListener('click', function(event) {
  navigation.classList.toggle('header-nav--active');
  logo.classList.toggle('header__logo--disable');
  burgerMenuLine.classList.toggle('burger-memu__line--active');
  burgerMenu.classList.toggle('burger-memu--active');
  headerNavigation.classList.toggle('header__nav--active');
}
);

navigation.addEventListener('click', function(event) {
  navigation.classList.remove('header-nav--active');
  logo.classList.remove('header__logo--disable');
  burgerMenuLine.classList.remove('burger-memu__line--active');
  burgerMenu.classList.remove('burger-memu--active');
  headerNavigation.classList.remove('header__nav--active');
}
);
