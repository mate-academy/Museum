'use strict';


const getBurger = document.querySelector('.icon--burger');
const getMenu = document.querySelector('.page__menu');
const body = document.querySelector('.page__body');
const navLinks = document.querySelectorAll('.nav__link')

const massifButtons = [getBurger, ...navLinks];

function getBurgerActive() {
  for (let i = 0; i < massifButtons.length; i++) {
    massifButtons[i].addEventListener('click', () => {
      getBurger.classList.toggle('icon--active');
      body.classList.toggle('page__body--lock');
      getMenu.classList.toggle('page__menu--active');
    })
  }
}

getBurgerActive();

// if (window.innerWidth <= 1050) {
//   const swiper = new Swiper('.gallery__swiper', {
//     slidesPerView: 1,

//     direction: 'horizontal',
//   });
// };
