'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('#menu');
  const closeBtn = document.querySelector('#closeMenuBtn');

  burger.addEventListener('click', () => {
    menu.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

const gallery = document.querySelector(".gallery__scroll");
const dots = document.querySelectorAll(".gallery__dots .dot");

gallery.addEventListener("scroll", () => {
  const scrollLeft = gallery.scrollLeft;
  const slideWidth = gallery.clientWidth;

  const index = Math.round(scrollLeft / slideWidth);

  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[index]) {
    dots[index].classList.add("active");
  }
});
