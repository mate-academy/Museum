'use strict';

const $ = window.$;

$(document).ready(function() {
  $('.header__button').click(function() {
    hamburgerSlide();
  });

  $('.hamburger__logo').click(function() {
    hamburgerSlide();
  });

  $('.hamburger__nav-item').click(function() {
    hamburgerSlide();
  });
});

function hamburgerSlide() {
  $('.hamburger').slideToggle();
  $('.hamburger__nav').slideToggle();
}
