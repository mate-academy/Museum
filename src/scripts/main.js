'use-strict';

const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.pagination__dot');

slider.addEventListener('scroll', () => {
  if (sliderItems.length < 2) {
    return false;
  }

  const rect1 = sliderItems[1].getBoundingClientRect().left;
  const rect0 = sliderItems[0].getBoundingClientRect().left;
  const itemStep = rect1 - rect0;

  const current = slider.scrollLeft + itemStep / 2;
  const currentIndex = Math.floor(current / itemStep);

  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('pagination__dot--active');
    } else {
      dot.classList.remove('pagination__dot--active');
    }
  });
});
