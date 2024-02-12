'use strict';

(function headerScroll() {
  let scrollPos = window.scrollY;
  const header = document.querySelector('header.header');

  const addScroll = () => header.classList.add('header-scroll');
  const removeScroll = () => header.classList.remove('header-scroll');

  window.addEventListener('scroll', () => {
    scrollPos = window.scrollY;

    if (scrollPos > 0) {
      addScroll();
    } else {
      removeScroll();
    }
  });
})();
