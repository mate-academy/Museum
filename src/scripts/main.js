'use strict';

// swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',

    roundLengths: true,
  },
});

// menu open

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

/*

class Slider {
  constructor(query) {
    this.slider = document.querySelector(query); // element slider
    this.slides = [...this.slider.querySelectorAll('.slider-slide')];
    this.time = null;

    this.currentSlide = Math.max(0, this.slides.findIndex(el =>
      el.classList.contains('is-active')));
    this.createPagination();
    this.setSlide(this.currentSlide);
  }

  createPagination() {
    this.dots = document.createElement('div');
    this.dots.classList.add('slider-pagination');

    this.slides.forEach((el, i) => {
      const btn = document.createElement('button');

      btn.classList.add('slider-pagination-button');
      btn.type = 'button';
      btn.innerText = i + 1;
      btn.addEventListener('click', () => this.setSlide(i));
      this.dots.append(btn);
    });

    this.slider.append(this.dots);
  }

  setSlide(index) {
    this.slides.forEach(slide => {
      slide.classList.remove('is-active');
    });

    this.slides[index].classList.add('is-active');

    const dots = [...this.dots.children];

    dots.forEach(dot => dot.classList.remove('is-active'));
    dots[index].classList.add('is-active');
    this.currentSlide = index;

    clearTimeout(this.time);
    this.time = setTimeout(() => this.slideNext(), 2500);
  }

  slideNext() {
    this.currentSlide++;

    if (this.currentSlide > this.slides.length - 1) {
      this.currentSlide = 0;
    }
    this.setSlide(this.currentSlide);
  }
}

const slider = new Slider('#mySlider');
*/
