const galleries = document.querySelectorAll('.gallery');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

galleries.forEach((gallery) => {
  const track = gallery.querySelector('[data-gallery-track]');
  const slides = [...gallery.querySelectorAll('[data-gallery-slide]')];
  const dotsContainer = gallery.querySelector('[data-gallery-dots]');

  if (!track || !dotsContainer) {
    return;
  }

  const dots = slides.map((_, index) => {
    const dot = document.createElement('button');

    dot.className = 'gallery__dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Перейти до слайда ${index + 1}`);

    dot.addEventListener('click', () => {
      slides[index].scrollIntoView({
        behavior: reduceMotion.matches ? 'auto' : 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    });

    dotsContainer.append(dot);

    return dot;
  });

  const setActiveDot = (activeIndex) => {
    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;

      dot.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  };

  setActiveDot(0);

  const visibilityMap = new Map(slides.map((slide) => [slide, 0]));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        visibilityMap.set(entry.target, entry.intersectionRatio);
      });

      const mostVisible = slides.reduce((best, slide) => {
        return visibilityMap.get(slide) > visibilityMap.get(best)
          ? slide
          : best;
      });

      const activeIndex = slides.indexOf(mostVisible);

      if (activeIndex !== -1) {
        setActiveDot(activeIndex);
      }
    },
    {
      root: track,
      threshold: Array.from({ length: 11 }, (_, i) => i / 10),
    },
  );

  slides.forEach((slide) => observer.observe(slide));
});
