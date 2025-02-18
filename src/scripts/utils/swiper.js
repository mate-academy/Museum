export const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
  },
});
