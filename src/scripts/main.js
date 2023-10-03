'use strict';

const galleryImages = document.querySelectorAll('.gallery__slider');
const form = document.querySelector('.subscription__form');

document.querySelector('.menu__dark')
  .addEventListener('click', function() {
    window.location.hash = '';
  });

form.addEventListener('submit', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
  form.reset();
};

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    document.getElementById(`slide-${index + 1}`).checked = true;
  });
});
