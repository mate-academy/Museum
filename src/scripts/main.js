'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.getElementById('burgerMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');
  const backdrop = document.getElementById('backdrop');

  burgerMenu.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeMenu.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  mobileMenu.addEventListener('click', function(e) {
    if (e.target === mobileMenu) {
      mobileMenu.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burgerMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  if (burgerMenu) {
    burgerMenu.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  }

  const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

  mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.getElementById('backdrop').classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  const sliderWrapper = document.querySelector('.gallery-slider__wrapper');
  const slides = document.querySelectorAll('.gallery-slider__slide');
  const dotsContainer = document.querySelector('.gallery-slider__dots');

  if (sliderWrapper && slides.length > 0) {
    let currentIndex = 0;
    const totalSlides = slides.length;

    const updateDots = () => {
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    };

    const goToSlide = (index) => {
      const slideWidth = slides[0].clientWidth;

      sliderWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
      currentIndex = index;
      updateDots();
    };

    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');

      dot.classList.add('gallery-slider__dot');

      if (i === 0) {
        dot.classList.add('active');
      }

      dot.addEventListener('click', () => {
        goToSlide(i);
      });
      dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.gallery-slider__dot');

    window.addEventListener('resize', () => {
      goToSlide(currentIndex);
    });
  }

  const scrollToTopButton = document.getElementById('scrollToTop');

  if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});
