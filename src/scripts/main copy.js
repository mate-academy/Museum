'use strict';

const root = document.documentElement;
const gridColumn = document.querySelector('.page__grid-measurer__column');
const header = document.querySelector('.header');
const container = document.querySelector('.container');
const headerImg = document.querySelector('.header__img');
const swiperImg = document.querySelector('.swiper__img');

// console.log('Ширина контейнера:', containerWidth, 'px');

const handleWindowResize = () => {
  const headerWidth = header.offsetWidth;
  const containerWidth = container.offsetWidth;
  const gridColumnWidth = gridColumn.offsetWidth;
  const marginLeft = (headerWidth - containerWidth) / 2;

  console.log('marginLeft: ', marginLeft, 'px');

  if (headerWidth < 768) {
    console.log('Маленький екран');

    headerImg.style.left = 0;

    root.style.setProperty('--swiper-img-width', gridColumnWidth * 2 + 20 + 'px');

  } else if (headerWidth < 1280) {
    console.log('Середній екран');
    const paddingInline = 34;
    const columnGap = 20;

    const leftWidth = marginLeft + paddingInline + (gridColumnWidth * 3) + (columnGap * 3);

    headerImg.style.left = leftWidth + 'px';

    root.style.setProperty('--swiper-img-width', gridColumnWidth * 3 + 40 + 'px');
  } else {
    console.log('Великий екран');
    const paddingInline = 55;
    const columnGap = 30;

    console.log('marginLeft: ', marginLeft, 'px');
    console.log('paddingInline: ', paddingInline, 'px');
    console.log('paddingInline: ', paddingInline, 'px');
    console.log('gridColumnWidth: ', gridColumnWidth, 'px', (gridColumnWidth * 5));
    console.log('gridColumnWidth: ', columnGap, 'px', (columnGap * 5));

    const leftWidth = marginLeft + paddingInline + (gridColumnWidth * 5) + (columnGap * 5);

    console.log('Відступ зліва: ', leftWidth, 'px');

    headerImg.style.left = leftWidth + 'px';
  }
};

// Отримати ширину при завантаженні сторінки
handleWindowResize();

// Слухати подію зміни розміру вікна
window.addEventListener('resize', handleWindowResize);

//-------------  swiper  ---------------------

const swiperContainer = document.querySelector('.swiper-container');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-wrapper > *'); // Обираємо всі дочірні елементи wrapper
const slideCount = slides.length;
let currentIndex = 0;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let isDragging = false;
let animationFrameId;
const threshold = 50; // Поріг для переходу слайда

// function getPositionX(event) {
//   return event.clientX || (event.touches && event.touches[0].clientX);
// }

function getPositionX(event) {
  return event.clientX !== undefined ? event.clientX : event.touches[0].clientX;
}

function setSliderPosition() {
  swiperWrapper.style.transform = `translateX(${currentTranslate}px)`;
}

// function animation() {
//   setSliderPosition();
//   if (isDragging) {
//     requestAnimationFrame(animation);
//   }
// }

function animation() {
  setSliderPosition();
  if (isDragging) {
    animationFrameId = requestAnimationFrame(animation);
  }
}

// function setIndex(index) {
//   if (index < 0) {
//     currentIndex = 0;
//   } else if (index >= slideCount) {
//     currentIndex = slideCount - 1;
//   } else {
//     currentIndex = index;
//   }
// }

// function moveToSlide(index) {
//   setIndex(index);
//   currentTranslate = -currentIndex * swiperContainer.offsetWidth;
//   setSliderPosition();
// }

// function moveToSlide(index, animated = true) {
//   if (index < 0) index = 0;
//   if (index >= slideCount) index = slideCount - 1;
//   currentIndex = index;
//   currentTranslate = -currentIndex * (swiperWrapper.offsetWidth + 16); // Враховуємо gap
//   if (animated) {
//     swiperWrapper.classList.add('is-animating'); // Додаємо клас для активації transition
//   } else {
//     swiperWrapper.classList.remove('is-animating');
//   }
//   setSliderPosition();
//   // Після завершення transition видаляємо клас (можна зробити через події transitionend)
//   setTimeout(() => {
//     swiperWrapper.classList.remove('is-animating');
//   }, 300); // Час має співпадати з transition у CSS
// }

function moveToSlide(index, animated = true) {
  if (index < 0) index = 0;
  if (index >= slideCount) index = slideCount - 1;
  currentIndex = index;
  const targetTranslate = -currentIndex * (swiperWrapper.offsetWidth + 16); // Обчислюємо цільову позицію

  swiperWrapper.classList.remove('not-transitioning'); // Вмикаємо transition

  if (animated) {
    swiperWrapper.classList.add('is-animating');
  } else {
    swiperWrapper.classList.remove('is-animating');
  }

  currentTranslate = targetTranslate; // Встановлюємо кінцеву позицію
  setSliderPosition();

  // Після завершення transition видаляємо клас
  swiperWrapper.addEventListener('transitionend', () => {
    swiperWrapper.classList.remove('is-animating');
  }, { once: true }); // Слухаємо подію лише один раз
}

swiperWrapper.addEventListener('touchstart', (event) => {
  startX = getPositionX(event);
  isDragging = true;
  // swiperWrapper.classList.add('dragging'); // Додайте клас для стилізації під час перетягування (за бажанням)
}, { passive: true });

swiperWrapper.addEventListener('touchmove', (event) => {
  if (!isDragging) return;

  const currentX = getPositionX(event);
  const diffX = currentX - startX;
  currentTranslate = prevTranslate + diffX;
  animation();
}, { passive: true });

swiperWrapper.addEventListener('touchend', () => {
  if (!isDragging) return;

  isDragging = false;
  // swiperWrapper.classList.remove('dragging'); // Видаліть клас

  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -50 && currentIndex < slideCount - 1) {
    currentIndex++;
  } else if (movedBy > 50 && currentIndex > 0) {
    currentIndex--;
  }

  moveToSlide(currentIndex);
  prevTranslate = currentTranslate;
});

// Для роботи на настільних комп'ютерах (перетягування мишею - опціонально)
// let isMouseDown = false;

// swiperWrapper.addEventListener('mousedown', (event) => {
//   event.preventDefault();
//   startX = getPositionX(event);

//   console.log('mouse down startX: ', startX);

//   isMouseDown = true;
//   // swiperWrapper.classList.add('dragging');
// }, { passive: false });

// swiperWrapper.addEventListener('mousemove', (event) => {
//   if (!isMouseDown) return;
//   // event.preventDefault();
//   const currentX = getPositionX(event);

//   console.log('mouse MOVE currentX: ', currentX);

//   const diffX = currentX - startX;

//   console.log('mouse MOVE diffX: ', diffX);
//   currentTranslate = prevTranslate + diffX;
//   animation();
// }, { passive: false });

// swiperWrapper.addEventListener('mouseup', () => {
//   if (!isMouseDown) return;

//   isMouseDown = false;
//   // swiperWrapper.classList.remove('dragging');

//   const movedBy = currentTranslate - prevTranslate;

//   if (movedBy < -50 && currentIndex < slideCount - 1) {
//     currentIndex++;
//   } else if (movedBy > 50 && currentIndex > 0) {
//     currentIndex--;
//   }

//   moveToSlide(currentIndex);
//   prevTranslate = currentTranslate;
// }, { passive: true });

// swiperWrapper.addEventListener('mouseleave', () => {
//   if (!isMouseDown) return;

//   isMouseDown = false;

//   // swiperWrapper.classList.remove('dragging');

//   moveToSlide(currentIndex);
//   prevTranslate = currentTranslate;
// }, { passive: true });

// // Ініціалізація: показуємо перший слайд
// moveToSlide(0);
// prevTranslate = currentTranslate;


swiperWrapper.addEventListener('mousedown', (event) => {
  event.preventDefault();
  startX = getPositionX(event);
  isDragging = true;
  swiperWrapper.classList.add('dragging');
  swiperWrapper.classList.add('not-transitioning'); // Вимикаємо transition
  prevTranslate = currentTranslate; // Запам'ятовуємо поточну позицію на початку перетягування
  animation(); // Запускаємо цикл requestAnimationFrame
}, { passive: false });

swiperWrapper.addEventListener('mousemove', (event) => {
  if (!isDragging) return;
  const currentX = getPositionX(event);
  const diffX = currentX - startX;
  currentTranslate = prevTranslate + diffX;
  // setSliderPosition(); // Оновлення позиції відбувається в animation
}, { passive: false });

swiperWrapper.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
  swiperWrapper.classList.remove('dragging');
  swiperWrapper.classList.remove('not-transitioning'); // Вмикаємо transition
  cancelAnimationFrame(animationFrameId); // Зупиняємо requestAnimationFrame

  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -threshold && currentIndex < slideCount - 1) {
    currentIndex++;
  } else if (movedBy > threshold && currentIndex > 0) {
    currentIndex--;
  }

  moveToSlide(currentIndex);
}, { passive: true });

swiperWrapper.addEventListener('mouseleave', () => {
  if (!isDragging) return;
  isDragging = false;
  swiperWrapper.classList.remove('dragging');
  swiperWrapper.classList.remove('not-transitioning'); // Вмикаємо transition
  cancelAnimationFrame(animationFrameId); // Зупиняємо requestAnimationFrame

  moveToSlide(currentIndex);
}, { passive: true });

// Ініціалізація
moveToSlide(0, false); // Показуємо перший слайд без анімації
