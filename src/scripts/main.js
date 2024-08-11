"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const sliderList = document.querySelector(".slider__list");
  const slides = document.querySelectorAll(".slider__item");

  let currentIndex = 0;

  const settings = {
    itemWidth: 280,
    frameSize: 1,
    step: 1,
    gap: 16,
    previewWidth: 4,
  };

  function initializeSettings() {
    if (window.innerWidth >= 1280) {
      const buttons = document.querySelector(".slider__buttons");

      if (buttons) {
        buttons.remove();
      }
      slider.removeAttribute("style");
      sliderList.removeAttribute("style");
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1280) {
      settings.itemWidth = 340;
      settings.frameSize = 2;
      settings.step = 2;
      settings.gap = 20;
      settings.previewWidth = 14;

      slider.style.minWidth = `${
        settings.itemWidth * settings.frameSize +
        settings.gap +
        settings.previewWidth
      }px`;

      const buttons = updateButtons();

      handleButtonsClick(buttons);
      sliderList.style.transform = "translateX(0)";
    } else {
      settings.itemWidth = 280;
      settings.frameSize = 1;
      settings.step = 1;
      settings.gap = 16;
      settings.previewWidth = 4;

      slider.style.minWidth = `${
        settings.itemWidth * settings.frameSize +
        settings.gap +
        settings.previewWidth
      }px`;

      const buttons = updateButtons();

      handleButtonsClick(buttons);

      sliderList.style.transform = "translateX(0)";
    }
  }

  function updateButtons() {
    const buttonsСontainer = document.createElement("ul");

    buttonsСontainer.classList.add("slider__buttons");

    const existingButtons = document.querySelector(".slider__buttons");

    if (existingButtons) {
      existingButtons.remove();
    }

    slider.append(buttonsСontainer);

    const totalSlides = slides.length;
    const frameSize = settings.frameSize;
    const step = settings.step;

    const numButtons = Math.ceil((totalSlides - frameSize) / step) + 1;

    for (let i = 0; i < numButtons; i++) {
      const item = document.createElement("li");
      const button = document.createElement("button");

      item.classList.add("slider__buttons-item");
      button.classList.add("slider__buttons-btn");

      item.appendChild(button);
      buttonsСontainer.appendChild(item);
    }

    return buttonsСontainer.querySelectorAll(".slider__buttons-btn");
  }

  function handleButtonsClick(currentButtons) {
    currentButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        if (index > currentIndex) {
          currentIndex = index * settings.step;
        } else {
          currentIndex = index * settings.step;
        }

        currentButtons.forEach((btn) =>
          btn.classList.remove("slider__buttons-btn--active")
        );
        button.classList.add("slider__buttons-btn--active");

        const sliderWidth = slider.offsetWidth;
        const totalWidth =
          slides.length * (settings.itemWidth + settings.gap) - settings.gap;

        let offset;

        if (currentIndex === 0) {
          offset = 0;
        } else if (currentIndex >= slides.length - settings.frameSize) {
          offset = totalWidth - sliderWidth;
        } else {
          offset =
            currentIndex * (settings.itemWidth + settings.gap) -
            (sliderWidth - settings.itemWidth) / 2 +
            settings.previewWidth / 2;
        }

        sliderList.style.transform = `translateX(-${offset}px)`;
      });
    });

    currentButtons[0].classList.add("slider__buttons-btn--active");
  }

  initializeSettings();
  window.addEventListener("resize", initializeSettings);

  // Touch
  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  slider.addEventListener("touchstart", touchStart);
  slider.addEventListener("touchmove", touchMove);
  slider.addEventListener("touchend", touchEnd);

  function touchStart(event) {
    isDragging = true;
    startPos = event.touches[0].clientX;
    prevTranslate = currentTranslate;
  }

  function touchMove(event) {
    if (isDragging) {
      const currentPosition = event.touches[0].clientX;

      currentTranslate = prevTranslate + currentPosition - startPos;
      sliderList.style.transform = `translateX(${currentTranslate}px)`;
    }
  }

  function touchEnd(e) {
    isDragging = false;

    const movedBy = startPos - e.changedTouches[0].clientX;

    if (Math.abs(movedBy) > 50) {
      if (movedBy > 50 && currentIndex < slides.length - settings.frameSize) {
        currentIndex += settings.step;
      } else if (movedBy < -50 && currentIndex > 0) {
        currentIndex -= settings.step;
      }
    }

    // Використання вашої логіки перемикання
    const buttons = document.querySelectorAll(".slider__buttons-btn");

    buttons[currentIndex / settings.step].click();
  }
});
