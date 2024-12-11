window.addEventListener('load', () => {
  const wrapper = document.querySelector('.gallery__wrapper');
  const dots = document.querySelectorAll('.gallery__dot');
  let currentIndex = 0;

  function updateActiveDot(index) {
    dots.forEach(dot => dot.classList.remove('gallery__dot--active'));
    dots[index].classList.add('gallery__dot--active');
  }

  function moveToSlide(index) {
    const width = wrapper.clientWidth;
    wrapper.style.transform = `translateX(-${width * index}px)`;
    currentIndex = index;
    updateActiveDot(index);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      moveToSlide(index);
    });
  });
});
