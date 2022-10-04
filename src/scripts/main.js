'use strict';

/* side-menu */

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.side-menu');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('open');
  menu.toggleAttribute('hidden');
});

document.addEventListener('scroll', () => {
  if (menu.getBoundingClientRect().bottom < 0) {
    menu.hidden = true;
    menuButton.classList.remove('open');
  }
});

/* form */

const form = document.querySelector('.subscription__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});

/* slider */

const images = document.querySelectorAll('.slider__image-container');
const buttons = document.querySelectorAll('.slider__dot');
const buttonsContainer = document.querySelector('.slider__dots');

buttonsContainer.addEventListener('click', (event) => {
  setDefaultOrder();

  const targetIndex = [...buttons].findIndex(button => button === event.target);

  buttons[targetIndex].classList.add('slider__dot--active');

  [...images].forEach((image, i) => {
    (i < targetIndex)
      ? image.style.order = i + images.length
      : image.style.order = i;
  });
});

window.addEventListener('resize', () => {
  setDefaultOrder();
  buttons[0].classList.add('slider__dot--active');
});

function setDefaultOrder() {
  [...images].forEach(image => {
    image.style.order = image.dataset.index;
  });

  [...buttons]
    .forEach(button => button.classList.remove('slider__dot--active'));
}
