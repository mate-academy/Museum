let swiperInstance = null;

function initSwiper() {
  if (window.innerWidth < 1248 && !swiperInstance) {
    swiperInstance = new Swiper('.gallery__swiper', {
      slidesPerView: 'auto',
      wrapperClass: 'gallery__wrapper',
      slideClass: 'gallery__slide',
      spaceBetween: 20,
      pagination: {
        el: '.gallery__pagination',
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 1248 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

initSwiper();
window.addEventListener('resize', initSwiper);
