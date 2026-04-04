'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelectorAll('.galery__wrapper');
  const scrollContainer = document.querySelector('.galery__images');
  const bottomSlider = document.querySelector('.galery__bottom-slider');

  const desktop = document.documentElement.clientWidth >= 1280 ? 1 : 2;
  let currentIndex = 0;
  let widthScroll = img[0].clientWidth + 0;
  let phoneOrTablet = 1;
  let indexElemet;

  if (document.documentElement.clientWidth >= 640) {
    widthScroll = img[0].offsetWidth + 20;
    phoneOrTablet = 2;
  }

  for (
    let countButton = 0;
    countButton < img.length - phoneOrTablet;
    countButton++
  ) {
    const newElement = document.createElement('button');

    newElement.classList.add('galery__button');
    bottomSlider.appendChild(newElement);
  }

  const swipe = () => {
    scrollContainer.scrollTo({
      left: widthScroll * currentIndex,
      behavior: 'smooth',
    });
  };
  const button = document.querySelectorAll('.galery__button');

  scrollContainer.addEventListener('scroll', () => {
    indexElemet = Math.round(scrollContainer.scrollLeft / widthScroll);
    button.forEach((b) => b.classList.remove('active'));
    button[indexElemet].classList.add('active');
  });

  function opacityHover(className) {
    if (desktop === 1) {
      const selectorList = document.querySelectorAll(className);

      selectorList.forEach((element) => {
        element.addEventListener('mouseover', () => {
          selectorList.forEach((i) => {
            i.style.opacity = 0.5;
            i.style.zIndex = 1;
          });
          element.style.opacity = 1;
          element.style.zIndex = 3;
          // console.log(element);
        });

        element.addEventListener('mouseleave', () => {
          selectorList.forEach((i) => (i.style.opacity = 1));
        });
      });
    }
  }
  opacityHover('.galery__wrapper');
  opacityHover('.nav__link');
  opacityHover('.footer__link');

  button.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      currentIndex = index;
      swipe();
    });
  });

  const form = document.querySelector('.subscriptions__form');

  form.addEventListener('submit', (e) => {
    form.reset();
  });
});
