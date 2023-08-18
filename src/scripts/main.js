'use strict';

const form = document.querySelector('.bottom-section__form');

const sendButton = document.querySelector(
  '.bottom-section__form--vector'
);

sendButton.addEventListener('click', e => {
  form.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const menuOpener = document.getElementById('menu-opener');
  const opacityDiv = document.querySelector('.page__opasity');
  const menuCros = document.querySelector('.aside__menu-close');
  const menuLinks = document.querySelectorAll('.aside__link');

  menuOpener.addEventListener('click', function(event) {
    opacityDiv.classList.add('page__opasity--activ');
  });

  menuCros.addEventListener('click', function(event) {
    opacityDiv.classList.remove('page__opasity--activ');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      opacityDiv.classList.remove('page__opasity--activ');
    });
  });
});
