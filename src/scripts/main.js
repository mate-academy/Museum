'use strict';

const $ = window.$;

$(document).ready(function() {
  
  function checkWidth() {
    const h = $('#menu').outerHeight();
    document.querySelector('.menu').style.setProperty('--height', h + 'px');
  };

  checkWidth(); // перевіряє при завантаженні

  $(window).resize(function() {
    // перевіряе при зміні розміру з ітервалом 1мс на протязі 300мс
    setTimeout(checkWidth, 300); 
  });
});
