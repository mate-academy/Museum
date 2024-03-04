const slider = document.querySelector('.swiper');

let swiper;

function modileSlider() {
  if (window.innerWidth <= 1024
    && slider.dataset.slider === 'false') {
    // eslint-disable-next-line no-undef
    swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 15,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      width: 280,

      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
          width: 340,
        },
      },
    });

    slider.dataset.slider = 'true';
  }

  if (window.innerWidth > 1024) {
    slider.dataset.slider = 'false';

    if (slider.classList.contains('swiper-initialized')) {
      swiper.destroy();
    }
  }
}

modileSlider();
window.addEventListener('resize', () => modileSlider());

swiper.slideNext();
