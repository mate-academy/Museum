const refs = {
  menuCloseBtnRef: document.querySelector('[data-close-menu]'),
  menuOpenBtnRef: document.querySelector('[data-open-menu]'),
  headerOverlay: document.querySelector('.header__overlay'),
  mobileMenuRef: document.querySelector('.top-bar__menu'),
  body: document.querySelector('.page__body'),
};

export function openMenu() {
  bodyLock();
  toggleMobileMenu();
};

export function closeMenu() {
  bodyUnlock();
  toggleMobileMenu();
};

function toggleMobileMenu() {
  const expandedOpen = refs.menuOpenBtnRef
    .getAttribute('aria-expanded') === 'true' || false;

  const expandedClose = refs.menuCloseBtnRef
    .getAttribute('aria-expanded') === 'true' || false;

  refs.headerOverlay.classList.toggle('open-menu');
  refs.menuOpenBtnRef.setAttribute('aria-expanded', !expandedOpen);
  refs.menuCloseBtnRef.setAttribute('aria-expanded', !expandedClose);

  refs.mobileMenuRef.classList.toggle('open-menu');
};

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document
    .querySelector('.page__body').offsetWidth + 'px';

  refs.body.style.paddingRight = lockPaddingValue;
  refs.body.classList.add('lock');
};

function bodyUnlock() {
  refs.body.style.paddingRight = '0px';
  refs.body.classList.remove('lock');
};
