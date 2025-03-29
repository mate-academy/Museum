'use strict';

const ToTopBtn = document.querySelector('.ToTop')


function checkVisibility() {
  if (window.innerWidth >= 1280) {
    ToTopBtn.style.display = "none";
  } else if (window.scrollY > 500) {
    ToTopBtn.style.display = "block";
  } else {
    ToTopBtn.style.display = "none";
  }
}

window.addEventListener('scroll', checkVisibility);

window.addEventListener('resize', checkVisibility);

ToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


checkVisibility();

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
      allowTouchMove: false,
    },
  }
});
