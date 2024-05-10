function isDesktop() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth;

  return screenWidth > 1280;
}

function toggleSwiper() {
  if (isDesktop()) {
    if (window.swiperInstance) {
      window.swiperInstance.destroy();
      window.swiperInstance = null;
    }
  } else {
    if (!window.swiperInstance) {
      // eslint-disable-next-line no-undef
      window.swiperInstance = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: true,
        centerSlide: true,
        grabCursor: true,
        fade: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
          waitForTransition: true,
        },
        pauseOnMouseEnter: true,
        pauseOnMouseLeave: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicsBullets: true,
        },

        breakpoints: {
          768: {
            slidesPerView: 2,
          },
        },
      });
    }
  }
}

toggleSwiper();

window.addEventListener('resize', function() {
  toggleSwiper();
});
