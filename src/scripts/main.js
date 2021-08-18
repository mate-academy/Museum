'use strict';

const btn = document.getElementById('page__top-btn');

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}

btn.addEventListener('click', scrollToTop);

function scrollToTop() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
