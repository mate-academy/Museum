'use strict';

// =====================
// NAV PANEL
// =====================
const burgerBtn = document.getElementById('burgerBtn');
const navPanel = document.getElementById('navPanel');
const menuClose = document.getElementById('menuClose');
const navLinks = navPanel ? navPanel.querySelectorAll('.nav-panel__link') : [];

function openMenu() {
  navPanel.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navPanel.classList.remove('is-open');
  document.body.style.overflow = '';
}

if (burgerBtn) burgerBtn.addEventListener('click', openMenu);
if (menuClose) menuClose.addEventListener('click', closeMenu);

navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// =====================
// GALLERY SLIDER (mobile)
// =====================
const sliderTrack = document.getElementById('sliderTrack');
const sliderDots = document.getElementById('sliderDots');

if (sliderTrack && sliderDots) {
  const slides = sliderTrack.querySelectorAll('.slider__slide');
  const totalSlides = slides.length;
  let currentSlide = 0;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'slider__dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', `Слайд ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    sliderDots.appendChild(dot);
  });

  function goToSlide(index) {
    currentSlide = index;
    const slideWidth = slides[0].offsetWidth;
    sliderTrack.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
    updateDots();
  }

  function updateDots() {
    sliderDots.querySelectorAll('.slider__dot').forEach((dot, i) => {
      dot.classList.toggle('is-active', i === currentSlide);
    });
  }

  // Update dot on scroll
  sliderTrack.addEventListener('scroll', () => {
    const slideWidth = slides[0].offsetWidth;
    const newIndex = Math.round(sliderTrack.scrollLeft / slideWidth);
    if (newIndex !== currentSlide) {
      currentSlide = newIndex;
      updateDots();
    }
  });

  // Touch swipe support
  let touchStartX = 0;
  sliderTrack.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  });
  sliderTrack.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSlide < totalSlides - 1) goToSlide(currentSlide + 1);
      else if (diff < 0 && currentSlide > 0) goToSlide(currentSlide - 1);
    }
  });
}

// =====================
// SUBSCRIBE FORM
// =====================
const subscribeForm = document.getElementById('subscribeForm');
const emailInput = document.getElementById('emailInput');
const formError = document.getElementById('formError');

if (subscribeForm) {
  subscribeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    formError.textContent = '';

    const email = emailInput.value.trim();

    if (!email) {
      formError.textContent = 'Будь ласка, введіть ваш e-mail.';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formError.textContent = 'Введіть коректний e-mail (наприклад: user@example.com).';
      return;
    }

    // Success — clear and scroll to top
    subscribeForm.reset();
    formError.style.color = '#4caf50';
    formError.textContent = 'Дякуємо за підписку!';

    setTimeout(() => {
      formError.textContent = '';
      formError.style.color = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  });
}

// =====================
// BACK TO TOP (в потоке футера — всегда видима на mobile)
// =====================
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// =====================
// SCROLL ANIMATIONS
// =====================
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll(
    '.event, .lecture__card, .gallery__item, .subscribe__content'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animateElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      // Элементы уже в viewport при загрузке — показываем сразу
      if (rect.top < window.innerHeight) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      } else {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
      }
    });
  }
});
