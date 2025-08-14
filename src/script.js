let startX;
let endX;

const slider = document.querySelector('.clider');

slider.addEventListener('touchstart', (e) => {
  startX = e.changeTouches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
  endX = e.changeTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  if (startX - endX > 100) {
    // Swipe to the left
    const nextSlide = document.querySelector(
      'input[name="slide"]:checked',
    ).nextElementSibling;
    if (nextSlide) {
      nextSlide.checked = true;
    }
  } else if (startX - endX < -100) {
    // Swipe to the right
    const prevSlide = document.querySelector(
      'input[name="slide"]:checked',
    ).previousElementSibling;
    if (prevSlide) {
      prevSlide.checked = true;
    }
  }
}
