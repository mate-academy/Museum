'use strict';


const imagesContainer = document.querySelector('.gallery__images');
const dots = document.querySelectorAll('.gallery__dot');

let currentIndex = 0;

const getVisibleSlides = () => {
  if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    return 2; // Для планшета показываем 2 картинки
  }
  return 1; // Для мобильных и остальных устройств показываем 1 картинку
};

const updateSlider = (index) => {
  const visibleSlides = getVisibleSlides(); // Получаем количество видимых слайдов
  const gap = parseFloat(getComputedStyle(imagesContainer).gap) || 0; // gap между слайдами
  const slideWidth = imagesContainer.offsetWidth / visibleSlides; // Ширина одного видимого слайда
  const offset = index * -(slideWidth + gap); // Смещение с учётом gap

  imagesContainer.style.transform = `translateX(${offset}px)`; // Смещаем слайды

  dots.forEach((dot, i) => {
    dot.classList.toggle('gallery__dot--active', i === index);
  });
};

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider(index);
  });
});
