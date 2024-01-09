'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const burgerButton = document.querySelector('.header__burger');
  const modalMenu = document.querySelector('.menu--page');
  const overlay = document.querySelector('.menu__overlay');
  const closeMenuButton = document.getElementById('closeModal');
  const galleryLink = document.getElementById('galleryLink');
  const eventsLink = document.getElementById('eventsLink');
  const aboutUsLink = document.getElementById('aboutUsLink');
  const contactsLink = document.getElementById('contactsLink');

  function toggleMenu() {
    modalMenu.classList.toggle('menu--open');

    overlay.style
      .display = overlay.style.display === 'block' ? 'none' : 'block';
  }

  burgerButton.addEventListener('click', toggleMenu);

  overlay.addEventListener('click', toggleMenu);

  closeMenuButton.addEventListener('click', toggleMenu);

  galleryLink.addEventListener('click', scrollToSection);

  eventsLink.addEventListener('click', scrollToSection);

  aboutUsLink.addEventListener('click', scrollToSection);

  contactsLink.addEventListener('click', scrollToSection);

  function scrollToSection(event) {
    event.preventDefault();

    const sectionId = this.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);

    section.scrollIntoView({ behavior: 'smooth' });
    toggleMenu();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  scrollToTopBtn.addEventListener('click', function() {
    scrollToTop();
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.reset();
  });
});
