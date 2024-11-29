'use strict';

const getBurger = document.querySelector('.icon--burger');
const body = document.querySelector('.page__body');

function getBurgerActive() {
  getBurger.addEventListener('click', () => {
    getBurger.classList.toggle('icon--active');
    body.classList.toggle('page__body--lock');
  })
}

getBurgerActive();
