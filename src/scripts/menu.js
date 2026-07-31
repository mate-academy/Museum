const MENU_OPEN_ATTR = 'data-fls-menu-open';

function bodyLockToggle(isOpen) {
  const scrollbar = window.innerWidth - document.documentElement.clientWidth;

  document.body.style.paddingRight = isOpen ? `${scrollbar}px` : '';
}

function toggleMenu(force) {
  const root = document.documentElement;
  const isOpen = force ?? !root.hasAttribute(MENU_OPEN_ATTR);

  root.toggleAttribute(MENU_OPEN_ATTR, isOpen);
  bodyLockToggle(isOpen);
}

function menuInit() {
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-fls-menu]')) {
      toggleMenu();

      return;
    }

    if (e.target.closest('[data-fls-menu-link]')) {
      toggleMenu(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleMenu(false);
    }
  });
}

if (document.querySelector('[data-fls-menu]')) {
  window.addEventListener('load', menuInit);
}
