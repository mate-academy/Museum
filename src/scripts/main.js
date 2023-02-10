'use strict';

// no scrolling with menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// page do not refresh after submitting form
const form = document.getElementById('formId');

function submitForm(event) {
  event.preventDefault();
  // eslint-disable-next-line
  alert('Дякуємо за довіру)');
  form.reset();
}
form.addEventListener('submit', submitForm);
