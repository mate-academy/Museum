'use strict';

const pageBody = document.body;
const menu = document.getElementById('site-menu');
const menuOpenButton = document.querySelector('[data-menu-open]');
const menuCloseButtons = document.querySelectorAll('[data-menu-close], [data-menu-close-link]');
const form = document.querySelector('[data-digest-form]');
const emailInput = document.getElementById('digest-email');
const notice = document.querySelector('[data-digest-notice]');

function openMenu() {
  if (!menu || !menuOpenButton) {
    return;
  }

  menu.hidden = false;
  pageBody.classList.add('menu-open');
  menuOpenButton.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  if (!menu || !menuOpenButton) {
    return;
  }

  menu.hidden = true;
  pageBody.classList.remove('menu-open');
  menuOpenButton.setAttribute('aria-expanded', 'false');
}

if (menuOpenButton) {
  menuOpenButton.addEventListener('click', openMenu);
}

menuCloseButtons.forEach((button) => {
  button.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

if (form && emailInput) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!emailInput.value.trim()) {
      emailInput.setCustomValidity('Введіть email, щоб оформити підписку.');
      emailInput.reportValidity();
      return;
    }

    if (!emailInput.checkValidity()) {
      emailInput.setCustomValidity('Введіть коректний email у форматі name@example.com.');
      emailInput.reportValidity();
      return;
    }

    emailInput.setCustomValidity('');
    form.reset();

    if (notice) {
      notice.hidden = false;

      window.setTimeout(() => {
        notice.hidden = true;
      }, 2500);
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  emailInput.addEventListener('input', () => {
    emailInput.setCustomValidity('');
  });
}

const galleryTrack = document.querySelector('.gallery__track');
const galleryDots = document.querySelectorAll('.gallery__dot');

if (galleryTrack && galleryDots.length) {
  galleryTrack.addEventListener('scroll', () => {
    const slideWidth = galleryTrack.firstElementChild.offsetWidth;
    const activeIndex = Math.round(galleryTrack.scrollLeft / slideWidth);

    galleryDots.forEach((dot, i) => {
      dot.classList.toggle('gallery__dot--active', i === activeIndex);
    });
  });

  galleryDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      const slideWidth = galleryTrack.firstElementChild.offsetWidth;

      galleryTrack.scrollTo({ left: slideWidth * i, behavior: 'smooth' });
    });
  });
}
