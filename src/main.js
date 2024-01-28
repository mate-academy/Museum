'use strict';

// let modal;

// function toggleModal(event) {
//   event.stopPropagation();
//   modal.classList.toggle('show');
// }

// function closeModal() {
//   modal.classList.remove('show');
// }

// document.addEventListener('DOMContentLoaded', function() {
//   modal = document.getElementById('modalMenu');
//   modal.addEventListener('click', closeModal);

//   const menuOpener = document.querySelector('.menu__opener');

//   menuOpener.addEventListener('click', toggleModal);
// });

// function sendForm() {
//   const subscribeTextarea = document.getElementById('subscribe');

//   subscribeTextarea.value = '';
// };

const modal = document.getElementById('modalMenu');
const menuOpener = document.querySelector('.menu__opener');
const logo = document.querySelector('.header_logo img');
const logoChevron = document.querySelector('.logo-chevron-hidden');
const logoCross = document.querySelector('.logo-cross-hidden');

menuOpener.addEventListener('click', (event) => {
  event.stopPropagation();
  modal.classList.toggle('show');

  // Проверяем, открыто ли модальное окно
  if (modal.classList.contains('show')) {
    logo.src = logoCross.src; // Change src to cross
    logo.style.position = 'fixed'; // Set position to fixed
    logo.style.left = '3%'; // Set left to 3%
    logo.style.top = '3%'; // Set top to 3%
  } else {
    logo.src = logoChevron.src; // Revert src to logo
    // Optionally, you might want to reset the styles if the modal doesn't contain 'show' class
    logo.style.position = ''; // Reset position
    logo.style.left = ''; // Reset left
    logo.style.top = ''; // Reset top
  }
});

// Добавляем обработчик для закрытия модального окна при клике вне него
modal.addEventListener('click', () => {
  modal.classList.remove('show');
  logo.src = logoCross.src; // Возвращаем src на логотип
});

// Добавляем обработчик для открытия модального окна при клике на логотип
logo.addEventListener('click', (event) => {
  event.stopPropagation();
  modal.classList.toggle('show');

  // Проверяем, открыто ли модальное окно
  if (modal.classList.contains('show')) {
    logo.src = logoCross.src; // Change src to cross
    logo.style.position = 'fixed'; // Set position to fixed
    logo.style.left = '3%'; // Set left to 3%
    logo.style.top = '3%'; // Set top to 3%
  } else {
    logo.src = logoChevron.src; // Revert src to logo
    // Optionally, you might want to reset the styles if the modal doesn't contain 'show' class
    logo.style.position = ''; // Reset position
    logo.style.left = ''; // Reset left
    logo.style.top = ''; // Reset top
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const subscribeButton = document.querySelector('.footer_subscribe-button');

  const sendForm = () => {
    const subscribeTextarea = document.getElementById('subscribe');

    subscribeTextarea.value = '';
  };

  subscribeButton.addEventListener('click', sendForm);
});
