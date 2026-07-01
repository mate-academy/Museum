'use strict';

const form = document.querySelector('.newsletter__form');
const successMessage = document.querySelector('.newsletter__success');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.reset();

  successMessage.classList.add('newsletter__success--visible');

  setTimeout(() => {
    successMessage.classList.remove('newsletter__success--visible');
  }, 3000);
});

const icons = document.querySelectorAll('.nav-icon');
const links = document.querySelectorAll(
  '.nav__link, .logo, .button__link--type--up',
);
const menu = document.querySelector('.page__menu');

/* =========================
   TOGGLE MENU
========================= */

icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    icons.forEach((ic) => ic.classList.toggle('open'));
    menu.classList.toggle('page__menu__open');
  });
});

/* =========================
   SMOOTH SCROLL
========================= */

links.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href');

    if (!href || !href.startsWith('#')) {
      return;
    }

    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    menu.classList.remove('page__menu__open');

    icons.forEach((ic) => ic.classList.remove('open'));

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
  });
});

const content = document.querySelector('.gallery__content');
const photos = document.querySelectorAll('.gallery__photo');
const bullets = document.querySelectorAll('.gallery__bullet');

if (content && photos.length > 0 && bullets.length > 0) {
  // 1. Автоматичне підсвічування кружечків
  const observerOptions = {
    root: content,
    threshold: 0.5,
  };

  // eslint-disable-next-line no-undef
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(photos).indexOf(entry.target);

        bullets.forEach((bullet) => {
          bullet.classList.remove('gallery__bullet--active');
        });

        if (bullets[index]) {
          bullets[index].classList.add('gallery__bullet--active');
        }
      }
    });
  }, observerOptions);

  photos.forEach((photo) => observer.observe(photo));

  // 2. Плавний скрол до потрібного фото при кліку
  bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
      if (photos[index]) {
        photos[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    });
  });
}
