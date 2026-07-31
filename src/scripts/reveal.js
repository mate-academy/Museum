const DELAY_STEP = 120;
const DELAY_MAX = 720;
const REVEALED_CLASS = 'is-revealed';

function collectItems() {
  const items = new Set(document.querySelectorAll('[data-reveal]'));

  document.querySelectorAll('[data-reveal-group]').forEach((group) => {
    [...group.children].forEach((child, index) => {
      const delay = Math.min(index * DELAY_STEP, DELAY_MAX);

      child.style.setProperty('--reveal-delay', `${delay}ms`);
      items.add(child);
    });
  });

  return [...items];
}

function revealInit() {
  const items = collectItems();

  if (items.length === 0) {
    return;
  }

  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(REVEALED_CLASS);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
  );

  items.forEach((item) => observer.observe(item));
}

if (typeof window.IntersectionObserver !== 'undefined') {
  document.documentElement.dataset.reveal = 'on';
  revealInit();
}
