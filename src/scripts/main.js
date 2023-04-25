'use strict';

const forgrid = document.querySelector('.forgrid');
const slider = document.querySelector('.slider');
const line = slider.querySelector('.slider__line');
const items = slider.querySelectorAll('.slider__item');
const dot = slider.querySelectorAll('.slider__dot');
const formfield = document.querySelector('.form-field');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#navigation') {
    document.body.classList.add('page__body--with-navigation');
  } else {
    document.body.classList.remove('page__body--with-navigation');
  }
});

for (let i = 0; i < dot.length; i++) {
  dot[i].addEventListener('click', function myCount() {
    if (window.innerWidth < 768) {
      line.style.cssText = `transform: translateX(-${i * 100}%)`;
    } else if (window.innerWidth > 768 && window.innerWidth < 1279) {
      line.style.cssText = `transform: translateX(-${i * 30}%)`;
    }
  });
};

function handleResize() {
  if (window.innerWidth > 1279) {
    forgrid.classList.add('grid');
    forgrid.classList.add('grid--row-gap');
    forgrid.classList.remove('slider__line');

    for (const item of items) {
      item.classList.add('grid__item');
    }
  } else {
    forgrid.classList.remove('grid');
    forgrid.classList.remove('grid--row-gap');
    forgrid.classList.add('slider__line');
  }
}

window.addEventListener('resize', handleResize);

formfield.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

handleResize();
