'use strict';

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      600: { slidesPerView: 2 },
      850: { slidesPerView: 3 },
    }
  });
});

function handleSubmit(event) {
  event.preventDefault();

  const input = document.querySelector('.follow__input');

  if (!input.value.trim()) {
    alert('Please, write email!')
    return false;
  }

  event.target.reset();

  window.scrollTo(0, 0);

  return false;
}
