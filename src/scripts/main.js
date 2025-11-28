'use strict';
AOS.init();

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

// lightbox логіка
const slides = document.querySelectorAll('.galery__lightbox');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox__img');
const closeBtn = lightbox.querySelector('.lightbox__close');
const prevBtn = lightbox.querySelector('.lightbox__prev');
const nextBtn = lightbox.querySelector('.lightbox__next');

let currentIndex = 0;

slides.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.classList.add('active');
  });

  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.classList.add('active');
    document.body.classList.add('no-scroll');
  });
});

function showImage() {
  lightboxImg.src = slides[currentIndex].src;
}

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
  document.body.classList.remove('no-scroll');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showImage();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showImage();
});

// очистка форми

const form = document.querySelector('#form');

form.addEventListener('submit', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
  form.reset();
};

// анімація меню
const menu = document.getElementById('menu');

function openMenu() {
  menu.classList.remove('closing');
  menu.classList.add('active');
}

function closeMenu() {
  menu.classList.remove('active');
  menu.classList.add('closing');

  const onEnd = (e) => {
    if (e.target === menu && e.propertyName === 'opacity') {
      menu.classList.remove('closing');
      menu.removeEventListener('transitionend', onEnd);
    }
  };

  menu.addEventListener('transitionend', onEnd);
}

window.addEventListener('hashchange', () => {
  if (location.hash === '#menu') {
    openMenu();
  } else {
    if (menu.classList.contains('active')) {
      closeMenu();
    }
  }
});

if (location.hash === '#menu') {
  openMenu();
}
