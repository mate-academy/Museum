
// Menu
// function sliders_bild_callback(params) {}

// Slider
import Swiper, { Navigation, Pagination } from 'swiper';

const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
  iconMenu.addEventListener('click', function(e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll('[data-goto]');

function onMenuLinkClick(e) {
  const menuLink = e.target;

  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue
      = gotoBlock.getBoundingClientRect().top + window.pageYOffset;

    if (iconMenu.classList.contains('_active')) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
    }

    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth',
    });
    e.preventDefault();
  }
}

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });
}

// Кнопка вверх
document.addEventListener('DOMContentLoaded', () => {
  const toTopBtn = document.querySelector('.up');

  window.onscroll = function() {
    if (window.pageYOffset > 580) {
      toTopBtn.classList.add('_up-show');
    } else {
      toTopBtn.classList.remove('_up-show');
    }
  };

  // плавный скролл наверх
  toTopBtn.addEventListener('click', function() {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });
});

// BildSlider
const sliders = document.querySelectorAll('._swiper');

if (sliders && window.innerWidth <= 1237) {
  for (let index = 0; index < sliders.length; index++) {
    const slider = sliders[index];

    if (!slider.classList.contains('swiper-bild')) {
      const sliderItems = slider.children;

      if (sliderItems) {
        for (let i = 0; i < sliderItems.length; i++) {
          const el = sliderItems[i];

          el.classList.add('swiper-slide');
        }
      }

      const sliderContent = slider.innerHTML;
      const sliderWrapper = document.createElement('div');

      sliderWrapper.classList.add('swiper-wrapper');
      sliderWrapper.innerHTML = sliderContent;
      slider.innerHTML = '';
      slider.appendChild(sliderWrapper);
      slider.classList.add('swiper-bild');
    }
  }
  slidersBildCallback();
}

function slidersBildCallback(params) {
  return gallery;
}

// init Swiper:
const gallery = new Swiper('.gallery__items', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  // Optional parameters
  simulateTouch: false,
  loop: true,
  watchOverflow: true,

  pagination: {
    el: '.pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
