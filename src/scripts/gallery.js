const OPEN_CLASS = 'is-open';
const ITEM_SELECTOR = '.gallery__item';

let lightbox = null;
let lightboxImage = null;
let openedItem = null;

function buildLightbox() {
  lightbox = document.createElement('div');
  lightbox.className = 'gallery__lightbox';
  lightbox.setAttribute('aria-hidden', 'true');

  lightboxImage = document.createElement('img');
  lightboxImage.className = 'gallery__lightbox-image';
  lightboxImage.alt = '';

  lightbox.append(lightboxImage);
  document.body.append(lightbox);
}

function closeLightbox() {
  if (!openedItem) {
    return;
  }

  openedItem.setAttribute('aria-expanded', 'false');
  openedItem.focus();
  openedItem = null;

  lightbox.classList.remove(OPEN_CLASS);
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function openLightbox(item) {
  const image = item.querySelector('img');

  if (!image) {
    return;
  }

  if (openedItem) {
    openedItem.setAttribute('aria-expanded', 'false');
  }

  openedItem = item;
  item.setAttribute('aria-expanded', 'true');

  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;

  lightbox.classList.add(OPEN_CLASS);
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function galleryInit() {
  const items = [...document.querySelectorAll(ITEM_SELECTOR)];

  if (items.length === 0) {
    return;
  }

  buildLightbox();

  items.forEach((item) => {
    item.setAttribute('aria-expanded', 'false');

    item.addEventListener('click', () => {
      if (openedItem === item) {
        closeLightbox();
      } else {
        openLightbox(item);
      }
    });
  });

  lightbox.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });
}

window.addEventListener('load', galleryInit);
