'use strict';
// вылаа




const swiper = new Swiper('.swiper', {
  
  pagination: {


    el: '.swiper-pagination',

    clickable: true,
  },



  grabCursor: true,

  breakpoints: {



    0: {
      slidesPerView: 1.07,
      spaceBetween: 16,
    },




    498: {
      slidesPerView: 2.1,
      spaceBetween: 20,
    },


  }
});
