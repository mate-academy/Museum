'use strict';

// Burger меню
const eclipsePage = document.querySelector(".page__body");
console.log(eclipsePage);
const navElement = document.querySelector(".aside");
console.log(navElement);
const btnLink = document.querySelector("ul");
console.log(btnLink);
const btnCross = document.querySelector(".aside__nav-cross");
console.log(btnCross);
const btnMenu = document.querySelector(".top-bar__menu");
console.log(btnMenu);

btnMenu.addEventListener('click', () => {
  navElement.classList.add('aside--active');
});

btnMenu.addEventListener('click', () => {
  eclipsePage.classList.add('page__body--active');
});

btnCross.addEventListener('click', () => {
  navElement.classList.remove('aside--active');
})

btnCross.addEventListener('click', () => {
  eclipsePage.classList.remove('page__body--active');
})

btnLink.addEventListener('click', () => {
  navElement.classList.remove('aside--active');
});
btnLink.addEventListener('click', () => {
  eclipsePage.classList.remove('page__body--active');
});

// Слайдер для Gallery
const sliderImages = document.querySelectorAll('.gallery__img');
const sliderLine = document.querySelector('.gallery__slider');
const sliderDots = document.querySelectorAll('.gallery__btnn');

let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlider);

// Задає потрібну ширину картинки і sliderLine
function showSlider() {
  sliderWidth = document.querySelector('.gallery__wrapper').offsetWidth;
  sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
  sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

  rollSlider();
};
showSlider();

// Задає крок переміщення слайда
function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Вказує який слайд по рахунку активний
function thisSlider(index) {
  sliderDots.forEach(item => item.classList.remove('gallery__btn-active'));
  sliderDots[index].classList.add('gallery__btn-active');
}

// Вішаємо click на dot
sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    sliderCount = index;
    rollSlider();
    thisSlider(sliderCount);
  })
})

// Вимкнув перезавантаження сторінки під час надсилання форми
const form = document.querySelector('.subscription__form-button');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
