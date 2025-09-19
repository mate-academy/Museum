'use strict';
// #region menu

const menuBtn = document.querySelectorAll('.button-menu');
const sideMenu = document.querySelector('.page__menu');
const menuLinks = document.querySelectorAll('.page__menu .nav__link');
const body = document.querySelector('.page__body');

function toggleMenu(forceState) {
  const isActive
    = forceState !== undefined
      ? forceState
      : !sideMenu.classList.contains('page__menu--is-open');

  sideMenu.classList.toggle('page__menu--is-open', isActive);
  body.classList.toggle('page__body--no-scroll', isActive);
  body.classList.toggle('page__body--is-under-menu', isActive);

  menuBtn.forEach((btn) => {
    btn.classList.toggle('button-menu--is-active', isActive);
  });
}

menuBtn.forEach((btn) => {
  btn.addEventListener('click', () => toggleMenu());
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => toggleMenu(false));
});
// #endregion

// #region slider
function initSlider() {
  const track = document.getElementById('slider-track');
  const slides = Array.from(track.querySelectorAll('.slider__slide'));
  const dotsContainer = document.getElementById('slider-dots');

  let slidesPerPage = calcSlidesPerPage();
  let pageCount = Math.ceil(slides.length / slidesPerPage);

  function calcSlidesPerPage() {
    if (window.matchMedia('(min-width: 1280px)').matches) {
      return slides.length;
    }

    return window.matchMedia('(min-width: 768px)').matches ? 2 : 1;
  }

  function renderDots() {
    slidesPerPage = calcSlidesPerPage();
    pageCount = Math.ceil(slides.length / slidesPerPage);

    if (window.matchMedia('(min-width: 1024px)').matches) {
      dotsContainer.style.display = 'none';

      return;
    } else {
      dotsContainer.style.display = '';
    }

    dotsContainer.innerHTML = '';

    for (let i = 0; i < pageCount; i++) {
      const btn = document.createElement('button');

      btn.className = 'slider__dots-button';
      btn.type = 'button';
      btn.setAttribute('aria-label', `Перейти на сторінку ${i + 1}`);
      btn.dataset.index = String(i);

      if (i === 0) {
        btn.classList.add('slider__dots-button--active');
      }

      btn.addEventListener('click', () => {
        const left = i * track.clientWidth;

        track.scrollTo({ left, behavior: 'smooth' });
        updateActiveDot();
      });

      dotsContainer.appendChild(btn);
    }
  }

  function updateActiveDot() {
    let pageIndex = Math.round(
      track.scrollLeft / (track.clientWidth / slidesPerPage),
    );

    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 2) {
      pageIndex = pageCount - 1;
    }

    const dots = dotsContainer.querySelectorAll('.slider__dots-button');

    dots.forEach((d, i) => {
      d.classList.toggle('slider__dots-button--active', i === pageIndex);
    });
  }

  let rafPending = false;

  function onScroll() {
    if (!rafPending) {
      rafPending = true;

      window.requestAnimationFrame(() => {
        updateActiveDot();
        rafPending = false;
      });
    }
  }
  track.addEventListener('scroll', onScroll, { passive: true });

  let resizeTimer;

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      const oldSlidesPerPage = slidesPerPage;
      const newSlidesPerPage = calcSlidesPerPage();

      if (newSlidesPerPage !== oldSlidesPerPage) {
        renderDots();
        track.scrollTo({ left: 0 });
      }
    }, 150);
  });

  renderDots();
  setTimeout(updateActiveDot, 0);

  // open img
  const lightbox = document.getElementById('slider-lightbox');
  const lightboxImg = document.getElementById('slider-lightbox-img');
  const lightboxClose = document.querySelector('.slider-lightbox__button');

  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      const img = slide.querySelector('img');

      if (!img) {
        return;
      }

      lightboxImg.src = img.src;
      lightbox.classList.add('slider-lightbox--active');
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('slider-lightbox--active');
    lightboxImg.src = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener('DOMContentLoaded', initSlider);

// #endregion
