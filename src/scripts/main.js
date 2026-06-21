const subscribeForm = document.querySelector('#subscribe-form');
const subscribeEmail = document.querySelector('#subscribe-email');
const subscribeError = document.querySelector('#subscribe-error');
const burgerToggle = document.querySelector('#burger-toggle');
const gallerySlider = document.querySelector('#gallery-slider');
const galleryGrid = document.querySelector('#gallery-grid');
const galleryDots = document.querySelector('#gallery-dots');

subscribeForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!subscribeEmail.checkValidity()) {
    subscribeError.textContent = 'Введіть коректний e-mail';
    subscribeError.classList.add('subscribe__error-msg--active');
    subscribeEmail.reportValidity();

    return;
  }

  subscribeError.textContent = '';
  subscribeError.classList.remove('subscribe__error-msg--active');
  subscribeForm.reset();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

subscribeEmail?.addEventListener('input', () => {
  subscribeError.textContent = '';
  subscribeError.classList.remove('subscribe__error-msg--active');
});

document
  .querySelectorAll('.header__nav-link, .header__logo')
  .forEach((link) => {
    link.addEventListener('click', () => {
      if (burgerToggle) {
        burgerToggle.checked = false;
      }
    });
  });

if (gallerySlider && galleryGrid && galleryDots) {
  const isMobile = () => window.matchMedia('(max-width: 1024px)').matches;
  const getItems = () =>
    Array.from(galleryGrid.querySelectorAll('.gallery__item'));

  const getCurrentIndex = (items) => {
    const scrollLeft = gallerySlider.scrollLeft;
    const maxScrollLeft = gallerySlider.scrollWidth - gallerySlider.clientWidth;
    const endThreshold = 8;

    if (scrollLeft >= maxScrollLeft - endThreshold) {
      return items.length - 1;
    }

    let index = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    items.forEach((item, itemIndex) => {
      const distance = Math.abs(item.offsetLeft - scrollLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        index = itemIndex;
      }
    });

    return index;
  };

  const scrollToIndex = (index) => {
    const items = getItems();
    const item = items[index];

    if (!item) {
      return;
    }

    gallerySlider.scrollTo({
      left: item.offsetLeft,
      behavior: 'smooth',
    });
  };

  const renderDots = () => {
    const items = getItems();

    galleryDots.innerHTML = '';

    items.forEach((_, index) => {
      const dot = document.createElement('button');

      dot.type = 'button';
      dot.className = 'gallery__dot';
      dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
      dot.addEventListener('click', () => scrollToIndex(index));
      galleryDots.append(dot);
    });
  };

  const syncDots = () => {
    const items = getItems();
    const activeIndex = getCurrentIndex(items);

    Array.from(galleryDots.children).forEach((dot, index) => {
      dot.classList.toggle('gallery__dot--active', index === activeIndex);
    });
  };

  const refresh = () => {
    if (!isMobile()) {
      galleryDots.innerHTML = '';

      return;
    }

    renderDots();
    syncDots();
  };

  refresh();

  gallerySlider.addEventListener(
    'scroll',
    () => {
      syncDots();
    },
    { passive: true },
  );

  window.addEventListener('resize', refresh);
}
