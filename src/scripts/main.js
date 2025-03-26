'use strict';

document.addEventListener('DOMContentLoaded', function () {
  let slideIndex = 1;
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dot");
  const slideshow = document.querySelector(".slideshow-container");
  const img_6 = document.querySelector(".img-6");

  function showSlides(n) {
    let slidesToShow = window.innerWidth >= 640 ? 2 : 1;
    let totalSlides = slides.length;

    if (window.innerWidth >= 1280) {
      slides.forEach(slide => {
        slide.style.display = "block";
        slide.classList.add("slide-active");
        img_6.style.display = "none";
      });
      dots.forEach(dot => dot.style.display = "none");
      slideshow.style.transform = "none";
    } else {
      slides.forEach(slide => {
        slide.style.display = "none";
        slide.classList.remove("slide-active");
      });
      dots.forEach(dot => dot.style.display = "inline-block");

      slideIndex = (n > totalSlides) ? 1 : (n < 1) ? totalSlides : n;

      dots.forEach(dot => dot.classList.remove("active"));

      for (let i = 0; i < slidesToShow; i++) {
        let currentSlide = slides[(slideIndex - 1 + i) % totalSlides];
        currentSlide.style.display = "flex";
        currentSlide.classList.add("slide-active");
      }

      dots[slideIndex - 1]?.classList.add("active");
    }
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  showSlides(slideIndex);
  window.addEventListener("resize", () => showSlides(slideIndex));
  dots.forEach((dot, i) => dot.addEventListener("click", () => currentSlide(i + 1)));


  document.getElementById("form").addEventListener("submit", function (ev) {
    const emailInput = document.getElementById("email-input");
    const emailError = document.getElementById("email-error");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;

    const emailValue = emailInput.value.trim().replace(/\s+/g, "");

    if (!emailPattern.test(emailValue)) {
      ev.preventDefault();
      emailError.textContent = "Please enter a valid email without spaces.";
      emailError.style.display = "block";
    } else {
      window.scrollTo({top: 0});
      emailInput.value = "";
      emailError.style.display = "none";
    }
  });
});
