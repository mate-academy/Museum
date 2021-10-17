'use strict';

const list = document.querySelector('.gallery__list');
// const counter = document.querySelector('.counter');
const prev = document.querySelector('.gallery__button--prev');
const next = document.querySelector('.gallery__button--next');

let position = 0;

move(0);

// Ждём клик от пользователя на кнопке Next
next.addEventListener('click', function() {
  move(1);
});

// Ждём клик от пользователя на кнопке Prev
prev.addEventListener('click', function() {
  move(-1);
});

function move(shift) {
//   Узнаём сколько детей в списке
  const count = list.children.length;

  //   Меняем позицию на указанное значение
  position += shift;

  /*   Добавляем или убираем у кнопок атрибут disabled
  next.disabled = position >= count - 1;
  prev.disabled = position <= 0;

  // Если нужно добавляем и убираем классы в зависимости от позиции
  list.classList.remove(`gallery__list--${position - 1}`);
  list.classList.remove(`gallery__list--${position + 1}`);
  list.classList.add(`gallery__list--${position}`);

  Нормируем позицию от 0 до count - 1 */
  position = (position + count) % count;

  /*   // Записывает текст в элемент
  counter.textContent = `Current position is ${position + 1}`;

  Меняем стили списка
  transform: translateX(-100%); // 0, -200%, -300% */
  list.style.transform = `translateX(${-position * 100}%)`;
}
