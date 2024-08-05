'use strict';
const btnContainer = document.querySelector('.gallery__controls-list');
const btns = document.querySelectorAll('.gallery__controls-btn');
const imgContainer = document.querySelector('.gallery__container-list');
const toTopBtn = document.querySelector('.footer__scroll-to-top');
const submitBtn = document.querySelector('.subscribe__submit-btn');
const ticketBtn = document.querySelector('.header__t-button');
const form = document.querySelector('.subscribe__form');

let btnIndex = 0;
let startX = 0;
let endX = 0;
let isMouseDown = false;

function computedMove(index) {
  const imgs = document.querySelectorAll('.gallery__image');
  const rectPrev = imgs[0].getBoundingClientRect();
  const rectNext = imgs[1].getBoundingClientRect();
  const spaceBetweenImg = rectNext.right - rectNext.width * 2 - rectPrev.left;
  const pureWidth = rectPrev.width + spaceBetweenImg;

  btns.forEach((btn) => {
    btn.classList.remove('gallery__active-btn');
  });

  const activeBtn = Array.from(btns).find(
    (btn) => +btn.dataset.index === +index,
  );

  if (activeBtn) {
    activeBtn.classList.add('gallery__active-btn');
  }

  imgContainer.style.transform = `translateX(-${pureWidth * index}px)`;
}

function isMove(event) {
  const element = event.target;

  if (element.closest('.gallery__controls-btn')) {
    btnIndex = +element.dataset.index;
    computedMove(btnIndex);
  }
}

function isActive() {
  btns[0].classList.add('gallery__active-btn');

  function isClick(e) {
    const element = e.target;

    if (element.closest('.gallery__controls-btn')) {
      btns.forEach((btn) => {
        btn.classList.remove('gallery__active-btn');
        element.classList.add('gallery__active-btn');
      });
    }
  }

  btnContainer.addEventListener('click', isClick);
}

imgContainer.addEventListener('mousedown', function (e) {
  startX = e.clientX;
  isMouseDown = true;
});

imgContainer.addEventListener('touchstart', function (e) {
  startX = e.touches[0].clientX;
  isMouseDown = true;
});

document.addEventListener('mouseup', (e) => {
  if (isMouseDown) {
    endX = e.clientX;
    isMouseDown = false;

    const distanceX = endX - startX;

    if (distanceX > 0 && btnIndex > 0) {
      btnIndex--;
      computedMove(btnIndex);
    } else if (distanceX < 0 && btnIndex < btns.length - 1) {
      btnIndex++;
      computedMove(btnIndex);
    }
  }
});

document.addEventListener('touchend', (e) => {
  if (isMouseDown) {
    endX = e.changedTouches[0].clientX;
    isMouseDown = false;
    const distanceX = endX - startX;

    if (distanceX > 0 && btnIndex > 0) {
      btnIndex--;
      computedMove(btnIndex);
    } else if (distanceX < 0 && btnIndex < btns.length - 1) {
      btnIndex++;
      computedMove(btnIndex);
    }
  }
});

function scrollTo() {
  window.scroll(0, 0);
}

function onSubmit(event) {
  const field = form.querySelector('.subscribe__field');
  if (field.value) {
    event.preventDefault();
    form.reset();
    window.scroll(0, 0);
  }
}

toTopBtn.addEventListener('click', scrollTo);
document.addEventListener('DOMContentLoaded', isActive, { once: true });
btnContainer.addEventListener('click', isMove);

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.icon--menu');
  const closeBtn = document.querySelector('.icon--close');
  const menuNav = document.querySelector('.menu__nav');

  menuBtn.addEventListener('click', () => {
    document.documentElement.classList.add('menu-open');
  });

  closeBtn.addEventListener('click', () => {
    document.documentElement.classList.remove('menu-open');
  });

  menuNav.addEventListener('click', () => {
    document.documentElement.classList.remove('menu-open');
  });
});

submitBtn.addEventListener('click', onSubmit);
ticketBtn.addEventListener('click', () => {
  document.querySelector('.performances').scrollIntoView();
});
