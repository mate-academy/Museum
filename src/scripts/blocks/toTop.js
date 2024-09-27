const toTopBtn = document.querySelector('.js-to-top');

window.addEventListener('scroll', (event) => {
  if (event.target.scrollingElement.scrollTop > 1500) {
    toTopBtn.style.opacity = 1;
    toTopBtn.style.pointerEvents = 'all';
  } else {
    toTopBtn.style.opacity = 0;
    toTopBtn.style.pointerEvents = 'none';
  }
});

toTopBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
