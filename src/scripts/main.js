'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const closeBtn = document.querySelector('.nav__close');
  const navMenu = document.querySelector('.nav');
  const navBackground = document.querySelector('.nav__background');

  closeBtn.addEventListener('click', function() {
    navMenu.classList.remove('nav--open');
  });

  navBackground.addEventListener('click', function() {
    navMenu.classList.remove('nav--open');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const headerBtn = document.querySelector('.header__btn');
  const navMenu = document.querySelector('.nav');

  headerBtn.addEventListener('click', function() {
    navMenu.classList.toggle('nav--open');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".gallery__img");
  const circles = document.querySelectorAll(".gallery__circle");

  circles.forEach((circle, index) => {
    circle.addEventListener("click", function() {
      images.forEach(image => {
        image.style.display = "none";
      });
      images[index].style.display = "block";
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
