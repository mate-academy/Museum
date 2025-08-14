'use strict';

const root = document.documentElement;
const gridColumn = document.querySelector('.page__grid-measurer__column');
const header = document.querySelector('.header');
const container = document.querySelector('.container');
const headerImg = document.querySelector('.header__img');
const swiperImg = document.querySelector('.swiper__img');

const handleWindowResize = () => {
  const headerWidth = header.offsetWidth;
  const containerWidth = container.offsetWidth;
  const gridColumnWidth = gridColumn.offsetWidth;
  const marginLeft = (headerWidth - containerWidth) / 2;

  console.log('marginLeft: ', marginLeft, 'px');

  if (headerWidth < 768) {
    headerImg.style.left = 0;

    root.style.setProperty('--swiper-img-width', gridColumnWidth * 2 + 20 + 'px');
  } else if (headerWidth < 1280) {
    const paddingInline = 34;
    const columnGap = 20;

    const leftWidth = marginLeft + paddingInline + (gridColumnWidth * 3) + (columnGap * 3);

    headerImg.style.left = leftWidth + 'px';

    root.style.setProperty('--swiper-img-width', gridColumnWidth * 3 + 40 + 'px');
  } else {
    const paddingInline = 55;
    const columnGap = 30;

    const leftWidth = marginLeft + paddingInline + (gridColumnWidth * 5) + (columnGap * 5);

    headerImg.style.left = leftWidth + 'px';
  }
};

handleWindowResize();

window.addEventListener('resize', handleWindowResize);

//-------------  swiper  ---------------------

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,

  // Пагінація
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  grabCursor: true,

  breakpoints: {
    320: {
      slidesPerView: 1.0142,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.0411,
      spaceBetween: 20,
    },
  },
});
