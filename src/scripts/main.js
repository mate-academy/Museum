'use strict';


let swiper = null; // Создаем переменую для будущего свайпера

function swiperInit() {
  const isMobile = window.innerWidth < 1280; // константа для проверки разрешния

  if (isMobile && !swiper) { // проверяем разрешение и создан ли слайдер (второе -обязательно, иначе он будет создаваться постоянно при смене разрешения)
    swiper = new Swiper('.gallery__slider', { // создаем свайпер в переменной
      pagination: {
        el: '.swiper-pagination', // делаем пагинацию и подключаемм е к контейнера
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
        //   swiper.destroy(true, true); // не работает, сделать иначе
        //   swiper = null;
        // }
      },
    });
  }

  if (!isMobile && swiper) { // на десткопах - обНУЛЛям
    swiper.destroy(true, true);
    swiper = null;
  }
}

swiperInit(); // обьявляем функцию
window.addEventListener('resize', swiperInit);
