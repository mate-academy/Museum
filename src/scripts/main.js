import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  loop: true,
  clickable: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form-subscribe');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
