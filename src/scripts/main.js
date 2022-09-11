'use strict';

const list = document.querySelector('.gallery__images');
const prev = document.querySelector('.gallery__prev-button');
const next = document.querySelector('.gallery__next-button');

let position = 0;

next.addEventListener('click', () => {
  const count = (list.children.length - 1);

  position += 1;

  if (position >= count) {
    position = 0;
  }

  list.style.transform = `translateX(${-position * 100}%)`;
});

prev.addEventListener('click', () => {
  const count = (list.children.length - 1);

  position -= 1;

  if (position < 0) {
    position = count - 1;
  }

  list.style.transform = `translateX(${-position * 100}%)`;
});

const form = document.querySelector('.subscription__form');
const inputs = document.querySelectorAll('.subscription__form-field');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);
