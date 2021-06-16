'use strict';

document.querySelector('.burger').addEventListener('click', function() {
  document.querySelector('.burger__icon').classList.toggle('active');
  document.querySelector('.burger__menu').classList.toggle('animate');
});

document.querySelector('.burger__nav-list')
  .addEventListener('click', function() {
    document.querySelector('.burger__icon').classList.toggle('active');
    document.querySelector('.burger__menu').classList.toggle('animate');
  });
