"use strict";

const mobileWidth = window.matchMedia('(min-width: 320px)');
const tabletWidth = window.matchMedia('(min-width: 640px)');
const DesktopWidth = window.matchMedia('(min-width: 1280px)');

const slider = document.querySelector('.slider__pics');
const slide = document.querySelectorAll('.slider__item');

const sliderBtnForward = document.querySelector('.slider__arrow-link--forward');
const sliderBtnBack = document.querySelector('.slider__arrow-link--back');

const sliderDots = document.querySelectorAll('.slider__dots-dot');

let currentIndex = 0;

sliderBtnForward.addEventListener("click", () => {
  console.log(currentIndex);

  sliderBtnBack.removeAttribute("disabled");
  sliderBtnBack.style.pointerEvents = "all";
  sliderBtnBack.style.cursor = "pointer";

  if (currentIndex < slide.length - 1) {
    sliderDots[currentIndex].classList.remove('slider__dots-dot--active');

    currentIndex ++;

    if (mobileWidth.matches) {
      slider.style.transform = `translateX(-${currentIndex * 300}px)`;
      sliderDots[currentIndex].classList.add('slider__dots-dot--active');
    }
    if (tabletWidth.matches) {
      slider.style.transform = `translateX(-${currentIndex * 375}px)`;
      sliderDots[currentIndex].classList.add('slider__dots-dot--active');
    }

    if (currentIndex === slide.length - 1) {
      sliderBtnForward.setAttribute("disabled", "true");
      sliderBtnForward.style.pointerEvents = "none";
      sliderBtnForward.style.cursor = "default";
    }
    console.log(currentIndex);
  }
});

sliderBtnBack.addEventListener("click", () => {
  console.log(currentIndex);

  sliderBtnForward.removeAttribute("disabled");
  sliderBtnForward.style.pointerEvents = "all";
  sliderBtnForward.style.cursor = "pointer";

  if (currentIndex > 0) {
    sliderDots[currentIndex].classList.remove('slider__dots-dot--active');

    currentIndex --;

    if (mobileWidth.matches) {
      slider.style.transform = `translateX(-${currentIndex * 300}px)`;
      sliderDots[currentIndex].classList.add('slider__dots-dot--active');
    }

    if (tabletWidth.matches) {
      slider.style.transform = `translateX(-${currentIndex * 375}px)`;
      sliderDots[currentIndex].classList.add('slider__dots-dot--active');
    }

    if (currentIndex === 0) {
      sliderBtnBack.setAttribute("disabled", "true");
      sliderBtnBack.style.pointerEvents = "none";
      sliderBtnBack.style.cursor = "default";
    }
  }
});

const events = document.querySelectorAll('.events');
const imageEvents = document.querySelectorAll('.events__pic');
const eventsContent = document.querySelectorAll('.events__content');
const eventsLecture = document.querySelector('.events__pic-wrapper');

for (let event = 0; event <= events.length - 1; event++) {
  if (event === events.length - 1) {
    events[event].addEventListener('mouseover', () => {
      // eventsLecture.style.transform = 'translateX(0%)';
      // eventsLecture.style.opacity = 1;

      //
      // eventsContent[event].style.transform = 'translateX(0%)';

      eventsContent[event].style.animation = 'appear 1s';
      eventsContent[event].style.opacity = 1;
    }
  )} else (events[event].addEventListener('mouseover', () => {
      eventsContent[event].style.transform = 'translateX(0%)';
      eventsContent[event].style.opacity = 1;
      imageEvents[event].style.transform = 'translateX(0%)';
      imageEvents[event].style.opacity = 1;
  }));
}

const signing = document.querySelector('.signing');
const emailInput = document.querySelector('.signing__input-email');
const emailBtn = document.querySelector('.signing__btn');

signing.addEventListener('mouseover', () => {
  emailInput.style.transform = 'translateX(0vw)';
  emailInput.style.opacity = 1;
  emailBtn.style.transform = 'translateX(0vw)';
})
