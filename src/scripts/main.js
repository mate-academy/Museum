'use strict';

const formSubmit = document.querySelector('#subscription-form');

formSubmit.addEventListener('submit', formSubmitSuccess, false);

function formSubmitSuccess(event) {
  const warn = 'Дякуємо! Ви успішно підписались на наші новини!<br>';

  document.getElementById('output-box').innerHTML = warn;

  document.getElementById('subscription-form').reset();

  event.preventDefault();
}
