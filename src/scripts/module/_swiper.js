const swiper = new Swiper('.mySwiper', {

  autoplay: {
  delay: 3000,
  pauseOnMouseEnter: true,
},
  loop: true,
  loopFillGroupBlank: false,
  slidesOffsetAfter:0,
  slidesPerView: 1,
  slidesPerGroup: 2,
  spaceBetween: 16,
  scrollbar: {
    draggable: true,
},
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  width: 280,

  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 10,
      width: 340,
    },
  },
});

const link = document.getElementById('link');

if (window.screen.availWidth >= 1280) {
link.href = '#gallery';
}