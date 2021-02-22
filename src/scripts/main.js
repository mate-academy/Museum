'use strict';

const $ = window.$;

$(document).ready(function() {
  $('.header__button').click(function() {
    hamburgerSlide();
  });

  $('.hamburger__button').click(function() {
    hamburgerSlide();
  });

  $('.nav__item').click(function() {
    hamburgerSlide();
  });
});

function hamburgerSlide() {
  $('.hamburger').slideToggle();
  $('.hamburger__nav').slideToggle();
}
