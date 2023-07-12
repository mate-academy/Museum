
const swiper = new Swiper('.swiper', {

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  breakpoints: {
    0: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const overlay = document.querySelector('.overlay');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    overlay.style.display = 'block';
  } else {
    document.body.classList.remove('page__body--with-menu');
    overlay.style.display = 'none';
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});