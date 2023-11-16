'use strict';

// slider HANDMADE

let slideIndex = 0;
const maxSlides = 4;
let resizeTimer;

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
    setTimeout(showSlides, 2000);
  }
}

function activateSlider() {
  document.querySelector('.container-gallery')
    .classList.remove('gallery-desktop');
  document.querySelector('.slider').classList.add('slider-active');
  showSlides();
}

function activateContainerGallery() {
  document.querySelector('.slider').classList.remove('slider-active');
  document.querySelector('.container-gallery').classList.add('gallery-desktop');
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
const closeMenuLink = document.querySelector('.menu__link');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';

    document.body.classList.remove('no-scroll');
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';

    document.body.classList.add('no-scroll');
  }
}

hamburger.addEventListener('click', toggleMenu);
closeMenuLink.addEventListener('click', toggleMenu);

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
