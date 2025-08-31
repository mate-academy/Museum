let swiperInstance;

function enableSwiper() {
  const wrapper = document.querySelector('.gallery-wrapper');

  if (window.innerWidth <= 1024 && !swiperInstance) {
    wrapper.classList.add('swiper');

    wrapper.innerHTML = '<div class="swiper-wrapper">' +
      Array.from(wrapper.children)
        .map(el => `<div class="swiper-slide">${el.innerHTML}</div>`)
        .join('') +
      '</div>' +
      '<div class="swiper-pagination"></div>';

swiperInstance = new Swiper('.gallery-wrapper', {
  loop: false,
  spaceBetween: 10,
  centeredSlides: true, // щоб картинка залишалася по центру
  slidesPerView: 1,     // за замовчуванням
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 20 },
    480: { slidesPerView: 1, spaceBetween: 20 },
    768: { 
      slidesPerView: 2, 
      spaceBetween: 32,
      centeredSlides: false, // щоб дві картинки нормально влізли
    },
    1024: { slidesPerView: 2, spaceBetween: 32 },
  },
});

  } 
  else if (window.innerWidth > 1024 && swiperInstance) {
    const slides = document.querySelectorAll('.swiper-slide');
    const wrapperHTML = Array.from(slides)
      .map(slide => `<div class="gallery-item">${slide.innerHTML}</div>`)
      .join('');
    wrapper.innerHTML = wrapperHTML;
    wrapper.classList.remove('swiper');
    swiperInstance.destroy(true, true);
    swiperInstance = undefined;
  }
}

window.addEventListener('load', enableSwiper);
window.addEventListener('resize', enableSwiper);
