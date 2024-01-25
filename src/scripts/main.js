window.addEventListener('hashchange', () => {
  const body = document.body;

  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    body.style.overflow = 'hidden';
  } else {
    document.body.classList.remove('page__body--with-menu');
    body.style.overflow = '';
  }
});

const button = document.querySelector('#button');

button.addEventListener('click', () => {
  window.location.hash = '';
});