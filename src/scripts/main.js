'use strict';

const menu = document.getElementById('menu');
const menuButton = document.querySelector('.header__menu');
const overflov = document.querySelector('.page__overflov');
const navLink = document.querySelectorAll('.nav__link');
const scrollBtn = document.getElementById('scroll');

function toggleMenu(element) {
  element.addEventListener('click', () => {
    menu.classList.toggle('page__menu-active');
    menuButton.classList.toggle('header__menu-active');
    overflov.classList.toggle('page__overflov-active');
  });
}

toggleMenu(menuButton);
navLink.forEach(x => toggleMenu(x));

const scrollBtnDisplay = function() {
  window.scrollY > window.innerHeight
    ? scrollBtn.classList.add('page__scroll--active')
    : scrollBtn.classList.remove('page__scroll--active');
};

window.addEventListener('scroll', scrollBtnDisplay);
