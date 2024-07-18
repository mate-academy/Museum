'use strict';

'use strict';

document.addEventListener("DOMContentLoaded", function () {
  const indicators = document.querySelectorAll(".gallery__indicator");

  function goToSlide(slide) {
    const galleryList = document.querySelector(".gallery__list");

    galleryList.style.transform = `translateX(-${slide * 40}%)`;
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === slide);
    });
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      goToSlide(index);
    });
  });

  window.addEventListener("resize", () => {
    const activeIndicator = document.querySelector(".gallery__indicator.active");
    if (activeIndicator) {
      goToSlide(Array.from(indicators).indexOf(activeIndicator));
    }
  });

  goToSlide(0);
});


