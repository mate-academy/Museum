'use strict';
const btnContainer = document.querySelector('.gallery__controls-list');

function isScroll(event) {
  const isScroll = event.target.href.slice(-4) === 'menu';

  if (isScroll) {
    document.documentElement.style.cssText = `
    position: fixed;
    top: 0;
    inline-size: 100%;
    overflow-y:scroll;
    `;
  } else {
    document.documentElement.style.cssText = ``;
  }
}

function isMove(event) {
  const imgContainer = document.querySelector('.gallery__container-list');
  const imgs = document.querySelectorAll('.gallery__image');
  const rectPrev = imgs[0].getBoundingClientRect();
  const rectNext = imgs[1].getBoundingClientRect();
  const spaceBetweenImg = (rectNext.right - rectNext.width * 2 - rectPrev.left);
  const pureWidth = rectPrev.width + spaceBetweenImg;

  if (event.target.closest('.gallery__controls-btn')) {
    const btnIndex = +event.target.dataset.index;

    imgContainer.style.cssText = `
    transform: translateX(-${pureWidth * btnIndex}px);
    transition: all .3s ease-in-out;
    `;
  }
}

btnContainer.addEventListener('click', isMove);
document.addEventListener('click', isScroll);
