'use strict';

window.addEventListener('load', function() {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body-menu');
  } else {
    document.body.classList.remove('body-menu');
  }
});

window.addEventListener('hashchange', function() {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body-menu');
  } else {
    document.body.classList.remove('body-menu');
  }
});

// const form = document.querySelector('.contact-us__form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   form.reset();
// });

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-us__form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
  });
});
