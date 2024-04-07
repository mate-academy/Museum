'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const closeBtn = document.querySelector('.nav__close');
  const navMenu = document.querySelector('.nav');
  const navBackground = document.querySelector('.nav__background');
  const body = document.querySelector('body');

  closeBtn.addEventListener('click', function() {
    navMenu.classList.remove('nav--open');
    updateBodyOverflow();
  });

  navBackground.addEventListener('click', function() {
    navMenu.classList.remove('nav--open');
    updateBodyOverflow();
  });

  const headerBtn = document.querySelector('.header__btn');
  headerBtn.addEventListener('click', function() {
    navMenu.classList.toggle('nav--open');
    updateBodyOverflow();
  });

  function updateBodyOverflow() {
    if (navMenu.classList.contains('nav--open')) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".gallery__img");
  const circles = document.querySelectorAll(".gallery__circle");

  circles.forEach((circle, index) => {
    circle.addEventListener("click", function() {
      const gallery = document.querySelector(".gallery__gallery");
      const scrollAmount = images[index].offsetLeft - gallery.offsetLeft;
      gallery.scrollTo({ left: scrollAmount, behavior: 'smooth' });

      circles.forEach(circle => {
        circle.classList.remove("active");
      });
      circle.classList.add("active");
    });
  });
});

const emailInput = document.getElementById('emailInput');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  if (emailInput.checkValidity()) {
    emailInput.value = '';
  } else {
    alert('Не коректний email');
  }
});
