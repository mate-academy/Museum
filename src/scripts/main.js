import { animateOnScroll } from './lib/animateOnScroll';
import { openMenu, closeMenu } from './lib/menu';
import { resetForm } from './lib/form';
import { scrollToTop } from './lib/scrollToTop';
import { popupOpen, popupClose } from './lib/popup';
import { logScreenWidth, checkDot, translateGallery } from './lib/slider';

const menuRefs = {
  menuCloseBtnRef: document.querySelector('[data-close-menu]'),
  menuOpenBtnRef: document.querySelector('[data-open-menu]'),
  menuLinks: document.querySelectorAll('.nav__link'),
};

const galleryRefs = {
  galleryDots: document.querySelectorAll('.gallery__dot'),
  galleryDot: document.querySelector('.gallery__dot'),
  galleryList: document.querySelector('.gallery__list'),
  galleryItems: document.querySelectorAll('.gallery__item'),
  galleryItem: document.querySelector('.gallery__item'),
};

const popupRefs = {
  popupLinks: document.querySelectorAll('.popup-link'),
  popupImages: document.querySelectorAll('.popup-link .gallery__image'),
  popupImg: document.querySelector('.popup__image'),
  popupCloseIcon: document.querySelectorAll('.close-popup'),
};

const etc = {
  form: document.querySelector('.form'),
  animateItems: document.querySelectorAll('.js-anim-items'),
  footerScrollTop: document.querySelector('[data-footer-button]'),
};

menuRefs.menuOpenBtnRef.addEventListener('click', openMenu);
menuRefs.menuCloseBtnRef.addEventListener('click', closeMenu);
etc.form.addEventListener('submit', resetForm);
etc.footerScrollTop.addEventListener('click', scrollToTop);

window.addEventListener('resize', function() {
  logScreenWidth(galleryRefs.galleryList);
  checkDot(galleryRefs.galleryDot, galleryRefs.galleryDots);
});

if (galleryRefs.galleryDots.length > 0) {
  galleryRefs.galleryDots.forEach((galleryDot, index) => {
    galleryDot.addEventListener('click', function() {
      checkDot(galleryDot, galleryRefs.galleryDots);
      translateGallery(galleryRefs.galleryList, galleryRefs.galleryItem, index);
    });
  });
}

if (etc.animateItems.length > 0) {
  window.addEventListener('scroll', animateOnScroll);
}

setTimeout(() => {
  animateOnScroll();
}, 300);

if (menuRefs.menuLinks.length > 0) {
  menuRefs.menuLinks.forEach(menuBurgerLink => {
    menuBurgerLink.addEventListener('click', function(e) {
      const expanded = menuRefs.menuCloseBtnRef
        .getAttribute('aria-expanded') === 'true' || false;

      if (expanded) {
        closeMenu();
      }
    });
  });
}

if (popupRefs.popupImages.length > 0) {
  popupRefs.popupImages.forEach(popupImage => {
    popupImage.addEventListener('click', function(e) {
      const popupSrc = popupImage.getAttribute('srcset').split(' ');
      const popupAlt = popupImage.getAttribute('alt');

      popupRefs.popupImg.src = `${popupSrc[popupSrc.length - 2]}`;
      popupRefs.popupImg.alt = `${popupAlt}`;
    });
  });
}

if (popupRefs.popupLinks.length > 0) {
  popupRefs.popupLinks.forEach(popupLink => {
    popupLink.addEventListener('click', function(e) {
      e.preventDefault();

      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);

      popupOpen(curentPopup);
    });
  });
}

if (popupRefs.popupCloseIcon.length > 0) {
  popupRefs.popupCloseIcon.forEach(el => {
    el.addEventListener('click', function(e) {
      e.preventDefault();

      popupClose(el.closest('.popup'));
    });
  });
}
