'use strict';

document.addEventListener( 'DOMContentLoaded', function() {
  let splide = new Splide("#mySlider", {
    classes: {
      pagination: 'splide__pagination gallery-section__pagination',
      page      : 'splide__pagination__page gallery-section__pagination-page',
    },


    arrows: false,
    pagination: true,
  });

  splide.mount();
} );


const submitButton = document.querySelector('#submitButton');
const emailInput = document.querySelector('#emailInput');

submitButton.addEventListener('click', function clean() {
  emailInput.value = '';
})

