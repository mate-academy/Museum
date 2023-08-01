'use strict';

const $ = window.$;

$(document).ready(function() {
  const h = $('#menu').outerHeight();

  document.querySelector('.menu').style.setProperty('--height', h + 'px');
});
