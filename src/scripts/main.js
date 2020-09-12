/* eslint-disable no-undef */
'use strict';

// Slick slider
$(document).ready(function() {
  $('.news__wrapper').slick({
    dots: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1125,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          arrows: true,
          dots: true,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
