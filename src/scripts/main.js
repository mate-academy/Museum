'use strict';

const body = document.querySelector('#body');
const menu = document.querySelector('#menu');
const background = document.querySelector('#background');
const menuOpenBtn = document.querySelector('#menu-open');
const menuOpenBtn2 = document.querySelector('#menu-open-2');
const menuCloseBtn = document.querySelector('#menu-close');
const toTop = document.querySelector('#to-top');
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const menuLinks = document.querySelectorAll('.menu_top_wrapper_link');

menuOpenBtn.addEventListener('click', openMenu);
menuOpenBtn2.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);
background.addEventListener('click', closeMenu);
toTop.addEventListener('click', scrollToTop);
form.addEventListener('submit', validation);

menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', closeMenu);
});

function openMenu () {
  menu.classList.remove('menu--closed');
  body.classList.add('body--no-scroll');
  background.classList.remove('body_background--not-visible');
}

function closeMenu () {
  menu.classList.add('menu--closed');
  body.classList.remove('body--no-scroll');
  background.classList.add('body_background--not-visible');
}

function scrollToTop () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

function validation (event) {
  event.preventDefault();
  input.value = '';
}
