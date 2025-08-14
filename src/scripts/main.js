'use strict';

const gallery = document.querySelector('.gallery__images');
const images = document.querySelectorAll('.gallery__image');
const navigation = document.querySelector('.gallery__navigation');

let currentIndex = 0;

images.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.classList.add('gallery__dot');
  navigation.appendChild(dot);
});

const dots = Array.from(navigation.querySelectorAll(".gallery__dot"));
dots[0].classList.add("active");

function updateActiveDot() {
  const scrollPosition = gallery.scrollLeft;

  const imageWidth = images[0].clientWidth + 20;
  const currentIndex = Math.round(scrollPosition / imageWidth);


  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

gallery.addEventListener("scroll", updateActiveDot);

