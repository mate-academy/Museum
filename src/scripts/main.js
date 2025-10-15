'use strict';

//  Header
const toggle = document.querySelectorAll('.toggle-action');
const body = document.body;

function headerToggle() {
  if (body.classList.contains('_menu-open')) {
    body.classList.remove('_menu-open');
  } else {
    body.classList.add('_menu-open');
  }
}

toggle.forEach((item) => {
  item.addEventListener('click', headerToggle);
});

// Scroll btn
const btnTop = document.querySelector('.scroll-top');

btnTop.addEventListener('click', scrollTop);

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Form
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = form.email.value.trim();

  if (!email) {
    return false;
  }

  form.email.value = '';
  scrollTop();
});

// Gallery
const gallery = document.querySelector('.gallery__container');
const dots = document.querySelector('.gallery__dots');

[...gallery.children].forEach((_, i) => {
  const dot = document.createElement('button');

  dot.classList.add('gallery__dot');

  dot.addEventListener('click', () => {
    gallery.scrollTo({
      left: gallery.offsetWidth * i,
      behavior: 'smooth',
    });
  });

  dots.append(dot);
});
