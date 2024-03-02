const slider = document.querySelector('.swiper');

let swiper;

function modileSlider() {
  if (window.innerWidth > 672
    && window.innerWidth <= 1280
    && slider.dataset.slider === 'false') {
    // eslint-disable-next-line no-undef
    swiper = new Swiper('.swiper', {
      centeredSlides: true,
      slidesPerView: 4,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 10,

    });

    slider.dataset.slider = 'true';
  }

  if (window.innerWidth <= 672 && slider.dataset.slider === 'false') {
    // eslint-disable-next-line no-undef
    swiper = new Swiper('.swiper', {
      centeredSlides: true,
      slidesPerView: 1,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 5,

    });

    slider.dataset.slider = 'true';
  }

  if (window.innerWidth > 1280) {
    slider.dataset.slider = 'false';

    if (slider.classList.contains('swiper-initialized')) {
      swiper.destroy();
    }
  }
}

modileSlider();
window.addEventListener('resize', () => modileSlider());

swiper.slideNext();
