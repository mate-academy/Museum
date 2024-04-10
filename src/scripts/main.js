// 'use strict';
import Swiper from 'swiper';


const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const html = document.querySelector('html');
const darkBackground = document.querySelector('.dark-background');
const navLink = document.querySelectorAll('.nav__link');

burger.addEventListener('click', (event) => {
  event.preventDefault();

  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  html.classList.toggle('active');
  darkBackground.classList.toggle('active');
})

navLink.forEach(navLink => {
  navLink.addEventListener('click', (event) => {

    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
    html.classList.remove('active');
    darkBackground.classList.remove('active');
  });
})





  //  var getScrollBarSize = (function () {
  //    var el = window.document.createElement('textarea'),
  //      style = {
  //        visibility: 'hidden',
  //        position: 'absolute',
  //        zIndex: '-2147483647',
  //        top: '-1000px',
  //        left: '-1000px',
  //        width: '1000px',
  //        height: '1000px',
  //        overflow: 'scroll',
  //        margin: '0',
  //        border: '0',
  //        padding: '0',
  //      },
  //      support = el.clientWidth !== undefined && el.offsetWidth !== undefined;

  //    for (var key in style) {
  //      if (style.hasOwnProperty(key)) {
  //        el.style[key] = style[key];
  //      }
  //    }

  //    return function () {
  //      var size = null;
  //      if (support && window.document.body) {
  //        window.document.body.appendChild(el);
  //        size = [
  //          el.offsetWidth - el.clientWidth,
  //          el.offsetHeight - el.clientHeight,
  //        ];
  //        window.document.body.removeChild(el);
  //      }
  //      return size;
  //    };
  //  })();

  //  console.log(getScrollBarSize());
