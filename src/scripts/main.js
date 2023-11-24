'use strict';

// slider HANDMADE

let slideIndex = 0;
const maxSlides = 4;
let resizeTimer;
let sliderActive = false; // Dodaj zmienną do śledzenia aktywności slajdera

function showSlides() {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  if (slideIndex <= maxSlides) {
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';

    if (sliderActive) {
      setTimeout(showSlides, 2000);
    }
  }
}

function activateSlider() {
  if (!sliderActive) {
    sliderActive = true;

    document.querySelector('.container-gallery')
      .classList.remove('gallery-desktop');
    document.querySelector('.slider').classList.add('slider-active');
    showSlides();
  }
}

function activateContainerGallery() {
  if (sliderActive) {
    sliderActive = false;
    document.querySelector('.slider').classList.remove('slider-active');

    document.querySelector('.container-gallery')
      .classList.add('gallery-desktop');
  }
}

function checkScreenWidth() {
  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(function() {
    if (window.innerWidth > 767) {
      activateContainerGallery();
    } else {
      activateSlider();
    }
  }, 250);
}

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);

// menu open

const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const menuLinks = document.querySelectorAll('.menu__link');
const overlay = document.querySelector('.overlay');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    overlay.style.opacity = 0;

    document.body.classList.remove('no-scroll');
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    overlay.style.opacity = 0.5;

    document.body.classList.add('no-scroll');
  }
}

function closeMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    overlay.style.opacity = 0;

    document.body.classList.remove('no-scroll');
  }
}

hamburger.addEventListener('click', toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// upward
const scroll = document.querySelector('.upward');

window.addEventListener('scroll', () => {
  scroll.classList.toggle('upward--active', window.scrollY > 500);
});

scroll.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// clear form

const submitButton = document.getElementById('submit');
const subscribeForm = document.getElementById('subscribeForm');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  subscribeForm.reset();
});
