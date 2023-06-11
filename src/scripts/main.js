// eslint-disable-next-line
const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--hidden');
  } else {
    document.body.classList.remove('page__body--hidden');
  }
});

const form = document.querySelector('.sub__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});
