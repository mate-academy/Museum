'use strict';

const getBurger = document.querySelector('.icon--burger');
const getMenu = document.querySelector('.page__menu');
const body = document.querySelector('.page__body');

function getBurgerActive() {
  getBurger.addEventListener('click', () => {
    getBurger.classList.toggle('icon--active');
    body.classList.toggle('page__body--lock');
    getMenu.classList.toggle('page__menu--active');
  })
}

getBurgerActive();
