'use strict';

const topBtn = document.getElementById('top-button');

window.onscroll = function() {
  scrollFunction();
};

topBtn.addEventListener('click', function() {
  topFunction();
});

function scrollFunction() {
  if
  (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    topBtn.style.display = 'flex';
  } else {
    topBtn.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
