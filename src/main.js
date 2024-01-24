'use strict';

let modal;

function toggleModal(event) {
  event.stopPropagation();
  modal.classList.toggle('show');
}

function closeModal() {
  modal.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', function() {
  modal = document.getElementById('modalMenu');
  modal.addEventListener('click', closeModal);

  const menuOpener = document.querySelector('.menu__opener');

  menuOpener.addEventListener('click', toggleModal);
});

function sendForm() {
  const subscribeTextarea = document.getElementById('subscribe');

  subscribeTextarea.value = '';
};
