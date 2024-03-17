'use strict';

const galleryBtns = document.querySelectorAll('.gallery__btn');
const galleryImages = document.querySelector('.gallery__img-block');

galleryBtns.forEach((btn, currentIndex) => {
  btn.addEventListener('click', () => {
    galleryBtns.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.classList.remove('gallery__btn--active');
      }
    });

    btn.classList.add('gallery__btn--active');

    const translateX = `calc(-${currentIndex * 100}% - ${20 * currentIndex}px)`;
    galleryImages.style.transform = `translateX(${translateX})`;
  });
});
