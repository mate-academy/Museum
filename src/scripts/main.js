import { animOnScroll } from './lib/animOnScroll';
import { openMenu, closeMenu } from './lib/menu';
import { resetForm } from './lib/form';
import { scrollToTop } from './lib/scrollToTop';
import { popupOpen, popupClose } from './lib/popup';
import { logScreenWidth, checkDot, translateGallery } from './lib/slider';

const refs = {
  menuCloseBtnRef: document.querySelector('[data-close-menu]'),
  menuOpenBtnRef: document.querySelector('[data-open-menu]'),
  menuLinks: document.querySelectorAll('.nav__link'),
  form: document.querySelector('.form'),
  animItems: document.querySelectorAll('.js-anim-items'),
  sliderArrowLeft: document.querySelector('.slider__arrow--left'),
  sliderArrowRight: document.querySelector('.slider__arrow--right'),
  footerScrollTop: document.querySelector('[data-footer-button]'),
  galleryDots: document.querySelectorAll('.gallery__dot'),
  galleryDot: document.querySelector('.gallery__dot'),
  galleryList: document.querySelector('.gallery__list'),
  galleryItems: document.querySelectorAll('.gallery__item'),
  galleryItem: document.querySelector('.gallery__item'),
  popupLinks: document.querySelectorAll('.popup-link'),
  popupImages: document.querySelectorAll('.popup-link .gallery__image'),
  popupImg: document.querySelector('.popup__image'),
  popupCloseIcon: document.querySelectorAll('.close-popup'),
};

refs.menuOpenBtnRef.addEventListener('click', openMenu);
refs.menuCloseBtnRef.addEventListener('click', closeMenu);
refs.form.addEventListener('submit', resetForm);
refs.footerScrollTop.addEventListener('click', scrollToTop);

window.addEventListener('resize', function() {
  logScreenWidth(refs.galleryList);
  checkDot(refs.galleryDot, refs.galleryDots);
});

if (refs.galleryDots.length > 0) {
  refs.galleryDots.forEach((galleryDot, index) => {
    galleryDot.addEventListener('click', function() {
      checkDot(galleryDot, refs.galleryDots);
      translateGallery(refs.galleryList, refs.galleryItem, index);
    });
  });
}

if (refs.animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
}

setTimeout(() => {
  animOnScroll();
}, 300);

if (refs.menuLinks.length > 0) {
  refs.menuLinks.forEach(menuBurgerLink => {
    menuBurgerLink.addEventListener('click', function(e) {
      const expanded = refs.menuCloseBtnRef
        .getAttribute('aria-expanded') === 'true' || false;

      if (expanded) {
        closeMenu();
      }
    });
  });
}

if (refs.popupImages.length > 0) {
  refs.popupImages.forEach(popupImage => {
    popupImage.addEventListener('click', function(e) {
      const popupSrc = popupImage.getAttribute('srcset').split(' ');
      const popupAlt = popupImage.getAttribute('alt');

      refs.popupImg.src = `${popupSrc[popupSrc.length - 2]}`;
      refs.popupImg.alt = `${popupAlt}`;
    });
  });
}

if (refs.popupLinks.length > 0) {
  refs.popupLinks.forEach(popupLink => {
    popupLink.addEventListener('click', function(e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);

      popupOpen(curentPopup);
      e.preventDefault();
    });
  });
}

if (refs.popupCloseIcon.length > 0) {
  refs.popupCloseIcon.forEach(el => {
    el.addEventListener('click', function(e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  });
}
