'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const formSubmit = document.querySelector('#subscription-form');

formSubmit.addEventListener('submit', formSubmitSuccess, false);

function formSubmitSuccess(event) {
  const warn = 'Дякуємо! Ви успішно підписались на наші новини!<br>';

  document.getElementById('output-box').innerHTML = warn;

  document.getElementById('subscription-form').reset();

  event.preventDefault();
}

const dot1 = document.querySelector('.dot-1');

const dot2 = document.querySelector('.dot-2');

const dot3 = document.querySelector('.dot-3');

const dot4 = document.querySelector('.dot-4');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#slide-2') {
    dot1.classList.remove('active');

    dot3.classList.remove('active');

    dot4.classList.remove('active');

    dot2.classList.add('active');
  } else if (window.location.hash === '#slide-3') {
    dot1.classList.remove('active');

    dot2.classList.remove('active');

    dot4.classList.remove('active');

    dot3.classList.add('active');
  } else if (window.location.hash === '#slide-4') {
    dot1.classList.remove('active');

    dot2.classList.remove('active');

    dot3.classList.remove('active');

    dot4.classList.add('active');
  } else if (window.location.hash === '#slide-1') {
    dot2.classList.remove('active');

    dot3.classList.remove('active');

    dot4.classList.remove('active');

    dot1.classList.add('active');
  }
});
