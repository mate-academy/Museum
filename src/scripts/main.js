'use strict';

/* eslint-disable no-undef */
/* eslint-disable no-new */
new Swiper('.slider__container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // grabCursor: true,
  autoHeight: true,
  slidesPerView: 1,
  loop: true,
  keybord: {
    enabled: true,
    onlyInViewport: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      enabled: false,
    },
  },
});

document.querySelector('.subscribe__button').onclick = function(e) {
  document.querySelector('.subscribe__input').value = '';
};

// при відкритті меню приховуємо прокрутку сторінки
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
  document.body.classList.toggle('no-scroll');
});

const form = document.getElementById('form');
// const subscribeButton = document.getElementById('subscribe');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (form.checkValidity()) { // перевіряємо форму на валідність
    const formData = new FormData(form);
    // створюємо об'єкт FormData для збору даних форми
    const xhr = new XMLHttpRequest();
    // створюємо новий об'єкт XMLHttpRequest

    xhr.open('POST', 'url/to/server');
    // встановлюємо метод та URL для відправки Ajax-запиту

    xhr.onload = function() {
      message.textContent = 'Форма успішно відправлена';
    };

    xhr.onerror = function() {
      message.textContent = 'Сталась помилка при відправленні форми';
    };
    xhr.send(formData);
  } else {
    message.textContent = 'Будь ласка, введіть правильний email';
  }
});
