'use strict';

document.getElementById("ticket_button").addEventListener("click", function() {
  alert("There are no tickets!");
});

function changeSlide(index) {
  if (window.innerWidth < 768) {
    const dots = document.querySelectorAll('.slider-gallery__dot');
    const slides = document.querySelectorAll('.slider-gallery__item');

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('slider-gallery__dot--active');
      slides[i].style.display = 'none';
    }

    dots[index].classList.add('slider-gallery__dot--active');
    slides[index].style.display = 'block';
  }
}
