'use strict';

// let modal;

// function toggleModal(event) {
//   event.stopPropagation();
//   modal.classList.toggle('show');
// }

// function closeModal() {
//   modal.classList.remove('show');
// }

// document.addEventListener('DOMContentLoaded', function() {
//   modal = document.getElementById('modalMenu');
//   modal.addEventListener('click', closeModal);

//   const menuOpener = document.querySelector('.menu__opener');

//   menuOpener.addEventListener('click', toggleModal);
// });

// function sendForm() {
//   const subscribeTextarea = document.getElementById('subscribe');

//   subscribeTextarea.value = '';
// };

const modal = document.getElementById('modalMenu');
const menuOpener = document.querySelector('.menu__opener');
const logo = document.querySelector('.header_logo img');
const logoChevron = document.querySelector('.logo-chevron-hidden');
const logoCross = document.querySelector('.logo-cross-hidden');
const backdrop = document.getElementById('backdrop');

menuOpener.addEventListener('click', (event) => {
  event.stopPropagation();
  modal.classList.toggle('show');
  backdrop.classList.toggle('show');

  if (modal.classList.contains('show')) {
    logo.src = logoCross.src;
  } else {
    logo.src = logoChevron.src;
  }
});

modal.addEventListener('click', () => {
  modal.classList.remove('show');
  backdrop.classList.remove('show');
  logo.src = logoCross.src;
});

logo.addEventListener('click', (event) => {
  event.stopPropagation();
  modal.classList.toggle('show');
  backdrop.classList.toggle('show');

  if (modal.classList.contains('show')) {
    logo.src = logoCross.src;
  } else {
    logo.src = logoChevron.src;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const subscribeButton = document.querySelector('.footer_subscribe-button');

  const sendForm = () => {
    const subscribeTextarea = document.getElementById('subscribe');

    subscribeTextarea.value = '';
  };

  subscribeButton.addEventListener('click', sendForm);
});

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  for (const link of internalLinks) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        const yOffset = -100; // Adjust as needed
        const targetPosition
         = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  }
});
