'use strict';


const getBurger = document.querySelector('.icon--burger');
const getMenu = document.querySelector('.page__menu');
const body = document.querySelector('.page__body');


function handleDocumentClick(event) {
  const target = event.target;

  const isBurgerClick = getBurger.contains(target);
  const isMenuClick = getMenu.contains(target);

  if (isMenuClick || isBurgerClick) {
    getBurger.classList.toggle('icon--active');
    body.classList.toggle('page__body--lock');
    getMenu.classList.toggle('page__menu--active');
  }
}

document.addEventListener('click', handleDocumentClick);



  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',

      clickable: true,
    },

    grabCursor: true,

    breakpoints: {
      498: {
        slidesPerView: 2.1,
        spaceBetween: 20,
      },

      0: {
        slidesPerView: 1.07,
        spaceBetween: 16,
      }
    }
  });
