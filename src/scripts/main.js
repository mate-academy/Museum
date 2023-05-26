'use strict';

const form = document.getElementById('myForm');
const dots = document.querySelectorAll('.slider__dot');
const img = document.querySelector('.slider__img');
const sliderContent = document.querySelector('.slider__content');
const imgSize = img.offsetWidth;

const sliderNumber = (dot) => {
  switch (dot) {
    case dots[0]:
      return 0;

    case dots[1]:
      return (imgSize + 20);

    case dots[2]:
      return (imgSize + 20) * 2;

    case dots[3]:
      return imgSize * 3;

    default:
      break;
  }
};

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    dots.forEach(dott => {
      dott.classList.remove('slider__dot--active');
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
