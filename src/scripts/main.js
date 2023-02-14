'use strict';

window.onload = function() {
  document.getElementById('form').addEventListener(
    'submit', stopDefAction, false);

  const dot1 = document.querySelector('.dot1');
  const dot2 = document.querySelector('.dot2');
  const dot3 = document.querySelector('.dot3');
  const dot4 = document.querySelector('.dot4');

  dot1.addEventListener('click', function() {
    dot4.style.backgroundColor = '#e0e0e0';
    dot3.style.backgroundColor = '#e0e0e0';
    dot2.style.backgroundColor = '#e0e0e0';
    dot1.style.backgroundColor = '#1a5a4c';
  });

  dot2.addEventListener('click', function() {
    dot4.style.backgroundColor = '#e0e0e0';
    dot3.style.backgroundColor = '#e0e0e0';
    dot2.style.backgroundColor = '#1a5a4c';
    dot1.style.backgroundColor = '#e0e0e0';
  });

  dot3.addEventListener('click', function() {
    dot4.style.backgroundColor = '#e0e0e0';
    dot3.style.backgroundColor = '#1a5a4c';
    dot2.style.backgroundColor = '#e0e0e0';
    dot1.style.backgroundColor = '#e0e0e0';
  });

  dot4.addEventListener('click', function() {
    dot4.style.backgroundColor = '#1a5a4c';
    dot3.style.backgroundColor = '#e0e0e0';
    dot2.style.backgroundColor = '#e0e0e0';
    dot1.style.backgroundColor = '#e0e0e0';
  });
};

function stopDefAction(evt) {
  evt.preventDefault();
  document.form.reset();
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
