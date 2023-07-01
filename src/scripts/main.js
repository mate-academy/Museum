'use strict';

const form = document.getElementById('myForm');
const dots = document.querySelectorAll('.slider__dot');
const img = document.querySelector('.slider__img');
const sliderContent = document.querySelector('.slider__content');
let imgSize;

const sliderNumber = (dot) => {
  switch (dot) {
    case dots[0]:
      return 0;

    case dots[1]:
      return imgSize;

    case dots[2]:
      return (imgSize * 2) + 40;

    case dots[3]:
      return (imgSize * 3) + 60;

    default:
      break;
  }
};

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    imgSize = img.offsetWidth;

    dots.forEach(dotClass => {
      dotClass.classList.remove('slider__dot--active');
    });
    dot.classList.add('slider__dot--active');
    sliderContent.style.transform = `translateX(-${sliderNumber(dot)}px)`;
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function handleForm(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', handleForm);
