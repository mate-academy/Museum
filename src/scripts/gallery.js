'use strict';

const gallery = document.querySelector('.gallery');

if (gallery) {
  const viewport = gallery.querySelector('.gallery__viewport');
  const slides = [...gallery.querySelectorAll('.gallery__slide')];
  const dots = [...gallery.querySelectorAll('.gallery__dot')];

  const setActiveDot = (activeIndex) => {
    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;

      dot.classList.toggle('gallery__dot--active', isActive);
      dot.setAttribute('aria-pressed', String(isActive));
    });
  };

  const getSlidePosition = (index) => {
    return slides[index].offsetLeft - slides[0].offsetLeft;
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      viewport.scrollTo({
        left: getSlidePosition(index),
        behavior: 'smooth',
      });

      setActiveDot(index);
    });
  });

  let scrollFrame = null;

  viewport.addEventListener('scroll', () => {
    if (scrollFrame !== null) {
      cancelAnimationFrame(scrollFrame);
    }

    scrollFrame = requestAnimationFrame(() => {
      const positions = slides.map((_, index) => getSlidePosition(index));

      const closestIndex = positions.reduce((closest, position, index) => {
        const currentDistance = Math.abs(viewport.scrollLeft - position);
        const closestDistance = Math.abs(
          viewport.scrollLeft - positions[closest],
        );

        return currentDistance < closestDistance ? index : closest;
      }, 0);

      setActiveDot(closestIndex);
      scrollFrame = null;
    });
  });
}
