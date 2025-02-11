'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.gallery__track');
  const slides = Array.from(document.querySelectorAll('.gallery__slide'));
  const indicators = Array.from(document.querySelectorAll('.gallery__indicator'));

  let currentIndex = 0;

  function updateGallery() {
    // Якщо ширина екрану >= 1280px – "слайдер" не працює:
    if (window.innerWidth >= 1280) {
      // Принудово скидаємо будь-які трансформації:
      track.style.transform = 'none';
      return;
    }

    // Зміщення треку для відображення поточного слайду (до 1280px)
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Оновлення індикаторів
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('gallery__indicator--active', index === currentIndex);
    });
  }

  // Додаємо обробники події кліку по індикаторах (лише для <1280)
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      // Якщо екран >= 1280, нічого не робимо
      if (window.innerWidth >= 1280) return;

      currentIndex = index;
      updateGallery();
    });
  });

  // При зміні розміру вікна перевіряємо, чи треба вмикати/вимикати слайдер
  window.addEventListener('resize', updateGallery);

  // Ініціалізація
  updateGallery();
});
