'use strict';

let sidebar = document.body.querySelector('.sidebar');
let burgerIcon = document.body.querySelector('.header__burgerIcon');
let burgerIconImg = document.body.querySelector('.header__burgerIconImg');

let headerTitle = document.body.querySelector('.header__title');

// ([burgerIcon, burgerIconImg, sidebar].includes(event.target))
// (event.target === burgerIcon || event.target === sidebar)

let slideIndex = 1;
let timer;

showSlides(slideIndex);

// Next/previous controls
/* function plusSlides(n) {
  showSlides(slideIndex += n);
} */

// Thumbnail image controls
let currentSlide = (n) => {
  showSlides(n);
};

function showSlides(n) {
  slideIndex = n;

  let i;
  const slides = document.querySelectorAll('.mySlides');
  const dots = document.querySelectorAll('.dot');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  slides[slideIndex - 1].style.display = 'block';

  // ADDED FOR IPAD
  if ((window.innerWidth > 690) && (slideIndex < slides.length)) {
    slides[slideIndex].style.display = 'block';
  }
  // REMOVE ABOVE IF NECESSARY

  dots[slideIndex - 1].classList.add('active');

  clearTimeout(timer);
  timer = setTimeout(() => currentSlide(slideIndex + 1), 5000);
}

document.body.addEventListener('click', (event) => {
  console.log('mouse click on ', event.target);
  console.log(`current slide index ${slideIndex}`);
  const width = window.innerWidth;
const height = window.innerHeight;

console.log(`The viewport's width is ${width} and the height is ${height}.`);

  if (sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
  } else if ([burgerIcon, burgerIconImg, sidebar].includes(event.target)
  && !sidebar.classList.contains('active')) {
    console.log('clicked on burger');

    sidebar.classList.toggle('active');
  }

  if (event.target.classList.contains('dot')) {
    console.log('clicked on dot');

    if (event.target.classList.contains('dot1')) {
      currentSlide(1);
    }

    if (event.target.classList.contains('dot2')) {
      currentSlide(2);
    }

    if (event.target.classList.contains('dot3')) {
      currentSlide(3);
    }

    if (event.target.classList.contains('dot4')) {
      currentSlide(4);
    }
  }
});
