'use strict';
import Swiper from 'swiper/swiper-bundle.min.mjs';
//  slider

// let currentIndex = 0;
// let interval;

// function switchSlide() {
//   currentIndex = (currentIndex + 1) % 4;
//   document.getElementById(`radio${currentIndex + 1}`).checked = true;
// }

// function startSlider() {
//   if (interval) {
//     stopSlider();
//   }

//   interval = setInterval(switchSlide, 3000);
// }

// function stopSlider() {
//   // currentIndex = 0;
//   clearInterval(interval);
// }

// function checkWindowSize() {
//   if (window.innerWidth < 1280) {
//     startSlider();
//   } else {
//     stopSlider();
//   }
// }

// checkWindowSize();

// window.addEventListener('resize', () => {
//   if (interval) {
//     document.getElementById('radio1').checked = true;
//     currentIndex = 0;
//     stopSlider();
//     checkWindowSize();
//   }
//   checkWindowSize();
// });

// document.querySelectorAll
// ('input[name="radio-btn"]').forEach((radio, index) => {
//   radio.addEventListener('click', () => {
//     stopSlider();
//     currentIndex = index;

//     setTimeout(() => {
//       checkWindowSize();
//     }, 4000);
//   });
// });

// swiper
let swiper = null; // Оголошуємо змінну для зберігання об'єкта свайпера

function initSwiper() {
  swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    speed: 2000,

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      // 1280: {
      //   slidesPerView: 2,
      //   spaceBetween: 30,
      // },
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,

      renderBullet: function(index, className) {
        return '<span class="' + className + '"></span>';
      },
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}

function checkScreenWidth() {
  if (window.innerWidth < 1280) {
    if (!swiper) {
      initSwiper(); // Ініціалізуємо свайпер, якщо його ще не було створено
    }
  } else {
    if (swiper) {
      swiper.destroy(); // Знищуємо свайпер, якщо він вже існує
      swiper = null; // Очищаємо змінну об'єкта свайпера
    }
  }
}

// Викликаємо перевірку при завантаженні сторінки та при зміні розміру вікна
window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
