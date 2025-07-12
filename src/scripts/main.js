'use strict';

const menu = document.getElementById('menu');
const openMenuButton = document.getElementById('menu-open');
const closeMenuButton = document.getElementById('menu-close');

openMenuButton.addEventListener('click', () => {
  menu.classList.add('menu--opened')
})

function closeMenu() {
  menu.classList.remove('menu--opened')
}

closeMenuButton.addEventListener('click', () => {
  closeMenu();
})

  // Check if the clicked element is an anchor tag with a hash in the href
document.addEventListener('click', function(e) {
  const target = e.target;

  if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
    const targetId = target.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault();

      closeMenu();

      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
});

if (window.innerWidth < 1280) {
  const swiper = new Swiper('.swiper', {
    spaceBetween: 16,
    slidesPerView: "auto",
    centeredSlides: true,
    breakpoints: {
      640: {
        // slidesPerView: 2,
        // slidesPerGroup:2,
        spaceBetween: 20,
        centeredSlides: false,
      }
    },
    pagination: {
      el: ".gallery__swiper-pagination",
      clickable: true,
      bulletActiveClass:"gallery__swiper-pagination-bullet-active",
      bulletClass:"gallery__swiper-pagination-bullet",
    },
  });
}
