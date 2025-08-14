'use strict';

//menu button
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".header-menu__button");
  const closeButton = document.querySelector(".header-menu__close-button");
  const menu = document.querySelector(".header-menu");
  const overlay = document.querySelector(".site-overlay");
  const menuLinks = document.querySelectorAll(".header-menu__list-link");

  function openMenu() {
    menu.classList.add("open");
    overlay.classList.add("active");
  }

  function closeMenu() {
    menu.classList.remove("open");
    overlay.classList.remove("active");
  }

  menuButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  menuLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
});

// gallery swipe mobile
document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".section-three__gallery-image");
  const dots = document.querySelectorAll(".section-three__dot");
  const gallery = document.querySelector(".section-three__gallery");
  let currentIndex = 0;
  let startX = 0;
  let endX = 0;
  let isGalleryEnabled = window.innerWidth < 1280;

  function updateDots(index) {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function changeImage(direction) {
    if (!isGalleryEnabled) {
      return;
    }

    currentIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length;
    updateDots(currentIndex);

    galleryImages[currentIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  function handleTouchStart(e) {
    if (!isGalleryEnabled) {
      return;
    }

    startX = e.touches[0].clientX;
  }

  function handleTouchMove(e) {
    if (!isGalleryEnabled) {
      return;
    }

    endX = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    if (!isGalleryEnabled) {
      return;
    }

    if (startX > endX + 50) {
      changeImage(1);
    } else if (startX < endX - 50) {
      changeImage(-1);
    }
  }

  gallery.addEventListener("touchstart", handleTouchStart);
  gallery.addEventListener("touchmove", handleTouchMove);
  gallery.addEventListener("touchend", handleTouchEnd);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      if (!isGalleryEnabled) {
        return;
      }

      currentIndex = index;
      updateDots(currentIndex);
      galleryImages[currentIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    });
  });

  function updateGalleryStatus() {
    isGalleryEnabled = window.innerWidth < 1280;
  }

  updateGalleryStatus();

  window.addEventListener("resize", updateGalleryStatus);

  updateDots(currentIndex);
});

//to-the-top-button
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.querySelector(".scroll-to-top");

  // Відслідковуємо подію скролу
  window.addEventListener("scroll", function () {
    // Показуємо кнопку, якщо сторінка прокручена більше ніж на 300px
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  // Прокрутка до верху при натисканні на кнопку
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // плавне прокручування
    });
  });
});
