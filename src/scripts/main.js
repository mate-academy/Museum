'use strict';

let swiper = null; // Создаем переменую для будущего свайпера

function swiperInit() { // делаем функцию создания свайпера

  if (swiper) { // если свайпер есть - закріваем функцию
    return;
  }

  swiper = new Swiper('.gallery__slider', { // создаем свайпер в переменной
    pagination: {
      el: '.swiper-pagination', // делаем пагинацию и подключаем к контейнера
    },

    slidesPerGroup: 1, // пролистываем максимум один слайд за одно дйствие

    // loop: true, // зациклить слайдер (тут не нужно, на будущее)

    breakpoints: {
      320: {
        slidesPerView: 1.15, // колво слайдов на єкране
        spaceBetween: 16, // расстояние между слайдами
        centeredSlides: true, // центрируем первый слайд
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 20,
        centeredSlides: false, // убираем центрацию
      },
      // 1280: {
      //   swiper.destroy(true, true); // НЕ РАБОТАЕТ, сделать иначе
      //   swiper = null;
      // }
    },
  });
}

function swiperDestroy() {
  // функункция удаления свайпера
  if (!swiper) { // защита от бага, если свайпера нет заканчиваем функцию
    return;
  }
  swiper.destroy(true, true); // если есть - уничтожаем
  swiper = null; // переменную обнуляем
}

function swiperCheck() {
  const isMobile = window.innerWidth < 1280; // константа для проверки разрешния

  if (isMobile) {
    swiperInit();
  } else {
    swiperDestroy();
  }
}

swiperCheck(); // обьявляем функцию во время запуска
window.addEventListener('resize', swiperCheck); // включаем функцию при каждом изменение разрешения 
