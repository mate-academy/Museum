'use strict';

const header = document.querySelector('.header__mobile__popup');
const togglerWrap = document.querySelector('.header__togler-wrap');
const toggler = document.querySelector('.toggler');
const wrap = document.querySelector('.header__left-wrap');

function toggleSidebar() {
  header.classList.toggle('header__mobile__popup--has-popup');
  toggler.classList.toggle('toggler--open');
  wrap.classList.toggle('header__left-wrap--close');
  document.body.classList.toggle('page--fixed');
}

header.addEventListener('click', toggleSidebar);
togglerWrap.addEventListener('click', toggleSidebar);
