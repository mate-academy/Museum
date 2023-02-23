'use strict';

document.addEventListener('DOMContentLoaded', function() {
  let init = false;
  let swiper;

  function swiperGallery() {
    if (window.innerWidth < 1024) {
      if (!init) {
        init = true;

        // eslint-disable-next-line
        swiper = new Swiper('.swiper', {
          slidesPerView: 1,
          spaceBetween: 16,
          pagination: {
            el: '.swiper-pagination',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet--active',
            clickable: true,
          },

          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          },
        });
      }
    } else if (init) {
      swiper.destroy();
      init = false;
    }
  }

  swiperGallery();
  window.addEventListener('resize', swiperGallery);
});
