'use strict';

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

document.getElementById('myBtn').addEventListener('click', topFunction);

/*
$('#slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  appendDots: '.dotts',
  dotsClass: 'dots-box',
});
*/

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const dotsContainer = document.querySelector('.dotts');
  const slides = document.querySelectorAll('.slide');

  slides.forEach((_, index) => {
    const dot = document.createElement('div');

    dot.classList.add('dot');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
  }

  function updateSlider() {
    slider.style.transform = `translateX(${-currentSlide * 100}%)`;
    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  }

  setInterval(nextSlide, 3000); // автоматична зміна слайдів кожні 3 секунди
});

