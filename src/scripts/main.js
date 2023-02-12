'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    document.querySelector('.page__menu').style.transform = 'translateY(0%)';
    window.scrollTo({ behavior: 'smooth' });
  } else {
    document.body.classList.remove('page__body--with-menu');
    document.querySelector('.page__menu').style.transform = 'translateY(-100%)';
  }
});
