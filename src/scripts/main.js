'use strict';

const form = document.querySelector('.footer__forms');
const inputs = document.querySelectorAll('.footer__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});

const headerBurger = document.querySelector('.header__burger');
const headerMennu = document.querySelector('.header__menu');
const headerList = document.querySelector('.header__list');

if (headerBurger) {
  headerBurger.addEventListener('click', function(e) {
    document.body.classList.toggle('lock');
    headerBurger.classList.toggle('header__burger--active');
    headerMennu.classList.toggle('header__menu--active');
  });
};

headerList.addEventListener('click', () => {
  headerBurger.classList.remove('header__burger--active');
  headerMennu.classList.remove('header__menu--active');
  document.body.classList.remove('lock');
});
