import $ from 'jquery';
import 'slick-carousel';

window.jQuery = window.$ = $;

$('.gallery__slider').slick({
  slidesToShow: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
      },
    },

    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 1880,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

const backToTop = document.querySelector('#backToTop');

backToTop.style.display = 'none';

document.querySelector('body').onscroll = function() {
  if (window.scrollY > 400) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
};
