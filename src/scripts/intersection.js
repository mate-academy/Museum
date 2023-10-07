'use strict';

/* eslint-disable no-unused-expressions */
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};
const target = document.querySelector('.actions__bottom');

const callback = function() {
  // eslint-disable-next-line no-trailing-spaces
  window.innerWidth < 768
    ? target.style.bottom = '74px'
    : target.style.bottom = '148px';
};

// eslint-disable-next-line no-undef
const observer = new IntersectionObserver(callback, options);

observer.observe(target);
