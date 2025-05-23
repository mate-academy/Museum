import './swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const burger = document.querySelector('.header__menu-icon');
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('overlay');
  const menuLinks = document.querySelectorAll('.header__menu a');

  burger.addEventListener('click', () => {
    menu.classList.toggle('is-open');
    burger.classList.toggle('is-open');
    overlay.classList.toggle('active');
    body.classList.toggle('no-scroll');
  });

  overlay.addEventListener('click', () => {
    menu.classList.remove('is-open');
    burger.classList.remove('is-open');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      burger.classList.remove('is-open');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  });
});

// Subscribe form handling
const subscribeForm = document.getElementById('subscribeForm');
const subscribeMessage = document.querySelector('.subscribe__message');

if (subscribeForm) {
  subscribeForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailInput = subscribeForm.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!email) {
      showMessage('Будь ласка, введіть email адресу', 'error');
      return;
    }

    try {
      // Here you would typically send the data to your server
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      showMessage('Дякуємо за підписку!', 'success');
      emailInput.value = '';
    } catch (error) {
      showMessage('Виникла помилка. Спробуйте пізніше.', 'error');
    }
  });
}

function showMessage(text, type) {
  if (!subscribeMessage) return;

  subscribeMessage.textContent = text;
  subscribeMessage.className = 'subscribe__message';
  subscribeMessage.classList.add(`subscribe__message--${type}`);

  // Clear message after 3 seconds
  setTimeout(() => {
    subscribeMessage.textContent = '';
    subscribeMessage.className = 'subscribe__message';
  }, 3000);
}
