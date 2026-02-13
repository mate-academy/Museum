export const initGallery = () => {
  const slider = document.querySelector('.gallery__slider');
  const items = document.querySelectorAll('.gallery__item');
  const pagination = document.querySelector('.gallery__pagination');

  if (!slider || !items.length || !pagination) {
    return;
  }

  const renderDots = () => {
    pagination.innerHTML = '';

    const isTablet = window.matchMedia('(min-width: 768px)').matches;
    const dotsCount = isTablet ? Math.ceil(items.length / 2) : items.length;

    for (let i = 0; i < dotsCount; i += 1) {
      const dot = document.createElement('button');

      dot.className = 'gallery__dot';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);

      if (i === 0) {
        dot.classList.add('gallery__dot--active');
      }

      dot.addEventListener('click', () => {
        const targetIndex = isTablet ? i * 2 : i;

        items[targetIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      });

      pagination.appendChild(dot);
    }
  };

  const updateActiveDot = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const dots = pagination.querySelectorAll('.gallery__dot');
        const index = Array.from(items).indexOf(entry.target);

        const isTablet = window.matchMedia('(min-width: 768px)').matches;
        const activeDotIndex = isTablet ? Math.floor(index / 2) : index;

        dots.forEach((dot) => {
          dot.classList.remove('gallery__dot--active');
        });

        if (dots[activeDotIndex]) {
          dots[activeDotIndex].classList.add('gallery__dot--active');
        }
      }
    });
  };

  renderDots();

  const observer = new window.IntersectionObserver(updateActiveDot, {
    root: slider,
    threshold: 0.5,
  });

  items.forEach((item) => {
    observer.observe(item);
  });

  let resizeTimeout;

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
      renderDots();
    }, 100);
  });
};
