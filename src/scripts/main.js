'use strict';

const isMobile = {
  Android: () => {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: () => {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: () => {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: () => {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: () => {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: () => {
    return (
      isMobile.Android()
      || isMobile.BlackBerry()
      || isMobile.iOS()
      || isMobile.Opera()
      || isMobile.Windows()
    );
  },
};

const form = document.querySelector('.subscribe__form');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

const menu = document.querySelector('.icon--menu');
const headerLinks = document.querySelectorAll('.navigation__link');
const body = document.querySelector('.page__body');
const navigation = document.querySelector('.header__navigation');
const scrolWidth = window.innerWidth - document.body.clientWidth;

if (menu) {
  menu.addEventListener('click', (e) => {
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
    navigation.classList.toggle('_open');

    if (!isMobile.any()) {
      if (body.classList.contains('_lock')) {
        body.style.paddingRight = scrolWidth + 'px';
      } else {
        body.style.paddingRight = 0;
      }
    }
  });
}

if (menu) {
  for (let i = 0; i < headerLinks.length; i++) {
    headerLinks[i].addEventListener('click', (e) => {
      menu.classList.toggle('_active');
      body.classList.toggle('_lock');
      navigation.classList.toggle('_open');

      if (!isMobile.any()) {
        if (body.classList.contains('_lock')) {
          body.style.paddingRight = scrolWidth + 'px';
        } else {
          body.style.paddingRight = 0;
        }
      }
    });
  }
}

$(document).ready(() => {
  $('.owl-carousel').owlCarousel({
    // Настройки слайдера
    loop: false, // Зациклить слайды
    margin: 16, // Отступ между слайдами
    nav: false, // Показать навигацию (кнопки "Вперед" и "Назад")
    center: true,
    items: 1,
    autoWidth: false,
    dots: true,
    stagePadding: 20,

    responsive: {
      500: {
        stagePadding: 50,
      },
      768: {
        items: 2,
        center: false,
        stagePadding: 40,
        margin: 20,
      },
    },
  });
});
