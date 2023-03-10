'use strict';

const checkIsMenuOpen = () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
};

window.addEventListener('hashchange', () => {
  checkIsMenuOpen();
});

const form = document.querySelector('.follow__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
  window.alert('You are subscribed!');
});

window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.section--reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
});
