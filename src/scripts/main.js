'use strict';

const list = document.querySelector('.gallery__list');
const prev = document.querySelector('.gallery__button--prev');
const next = document.querySelector('.gallery__button--next');

let position = 0;

move(0);

next.addEventListener('click', function() {
  move(1);
});

prev.addEventListener('click', function() {
  move(-1);
});

function move(shift) {
  const count = list.children.length;

  position += shift;

  position = (position + count) % count;

  list.style.transform = `translateX(${-position * 100}%)`;
}
