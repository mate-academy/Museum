'use strict';

// #region to-top arrow showing
const arrow = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  const scrolledPixels = window.scrollY;

  if (scrolledPixels > 50) {
    arrow.classList.add('to-top--show');
  } else {
    arrow.classList.remove('to-top--show');
  }
});
// #endregion

// #region sliderPaginatorHandler
const colection = document.querySelector('.gallery__img-collection');
const images = document.querySelectorAll('.gallery__img');
const paginatorItems = document.querySelectorAll('.paginator__item');

function percentageImgOnScreen(img) {
  const imgRect = img.getBoundingClientRect();
  const colectionRect = colection.getBoundingClientRect();

  // Обчислення видимої ширини зображення
  const visibleWidth
    = Math.min(imgRect.right, colectionRect.right)
    - Math.max(imgRect.left, colectionRect.left);

  // Перевірка, чи зображення повністю поза областю видимості
  if (visibleWidth <= 0) {
    return 0;
  }

  // Обчислення відсотку видимості зображення
  const imgWidth = imgRect.width;
  const percentageOnScreen = Math.min(100, (visibleWidth / imgWidth) * 100);

  return percentageOnScreen;
}

function updatePaginator() {
  for (let i = 0; i < images.length; i++) {
    const activePercent = percentageImgOnScreen(images[i]);
    const nonActivePercent = 100 - activePercent;

    paginatorItems[i].style.setProperty('--color', `${nonActivePercent}%`);
    paginatorItems[i].style.setProperty('--active-color', `${activePercent}%`);
  }
}

colection.addEventListener('scroll', updatePaginator);

// updatePaginator();

// #endregion
