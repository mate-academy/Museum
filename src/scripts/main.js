'use strict';

const $ = window.$;

// $(document).ready(function() {
//   const h = $('#menu').outerHeight();

//   document.querySelector('.menu').style.setProperty('--height', h + 'px');
// });

$(document).ready(function() {
  function checkWidth() {
    const h = $('#menu').outerHeight();

    document.querySelector('.menu').style.setProperty('--height', h + 'px');
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function() {
    checkWidth(); // проверит при изменении размера окна клиента
  });
});
