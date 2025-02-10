// Slider logic

document.addEventListener('DOMContentLoaded', () => {
  const sliderTrack = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.slider-dots');
  let currentIndex = 0;
  let startX = 0;
  let isDragging = false;

  function initSlider() {
    if (window.innerWidth >= 1280) {
      destroySlider();
      return;
    }

    // Recreate dots after every initialization
    createDots();
    updateSliderPosition();
    addEventListeners();
  }

  function destroySlider() {
    dotsContainer.innerHTML = '';
    sliderTrack.style.transform = '';
    removeEventListeners();
  }

  function createDots() {
    dotsContainer.innerHTML = '';
    const slidesToShow = getSlidesToShow();
    const dotsCount = Math.ceil(slides.length / slidesToShow);

    for (let i = 0; i < dotsCount; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.addEventListener('click', () => goToSlide(i * slidesToShow));
      dotsContainer.appendChild(dot);
    }
    updateDots();
  }

  function getSlidesToShow() {
    return window.innerWidth >= 640 ? 2 : 1;
  }

  function updateDots() {
    const slidesToShow = getSlidesToShow();
    const activeDotIndex = Math.floor(currentIndex / slidesToShow);
    document.querySelectorAll('.dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === activeDotIndex);
    });
  }

  function updateSliderPosition() {
    const slidesToShow = getSlidesToShow();
    const maxIndex = slides.length - slidesToShow;
    currentIndex = Math.min(currentIndex, maxIndex);
    goToSlide(currentIndex);
  }

  function goToSlide(index) {
    const slideWidth = slides[0].clientWidth;
    currentIndex = index;
    sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    updateDots();
  }

  function handleSwipe(direction) {
    const slidesToShow = getSlidesToShow();
    const maxIndex = slides.length - slidesToShow;

    if (direction === 'left' && currentIndex < maxIndex) {
      currentIndex += slidesToShow;
    } else if (direction === 'right' && currentIndex > 0) {
      currentIndex -= slidesToShow;
    }

    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
    goToSlide(currentIndex);
  }

  function addEventListeners() {
    sliderTrack.addEventListener('touchstart', handleTouchStart);
    sliderTrack.addEventListener('touchmove', handleTouchMove);
  }

  function removeEventListeners() {
    sliderTrack.removeEventListener('touchstart', handleTouchStart);
    sliderTrack.removeEventListener('touchmove', handleTouchMove);
  }

  function handleTouchStart(e) {
    if (window.innerWidth >= 1280) return;
    startX = e.touches[0].clientX;
    isDragging = true;
  }

  function handleTouchMove(e) {
    if (window.innerWidth >= 1280 || !isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      handleSwipe(diff > 0 ? 'left' : 'right');
      isDragging = false;
    }
  }

  window.addEventListener('resize', () => {
    initSlider();
  });

  initSlider();
});

// Dropdown logic

const dropdown = document.querySelector('.header__dropdown');

const dropdownNavLinks = document.querySelectorAll(
  '.header__dropdown-nav-link',
);
const openBtn = document.querySelector('.icon--dropdown-open');
const closeBtn = document.querySelector('.icon--dropdown-close');
const backdrop = document.getElementById('backdrop');

// Open dropdown
openBtn.addEventListener('click', () => {
  dropdown.classList.remove('header__dropdown--non-visible');
  dropdown.classList.add('header__dropdown--active');

  // Hide/display buttons after animation
  setTimeout(() => {
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    closeBtn.style.opacity = '1';
    backdrop.classList.add('backdrop--active');
    openBtn.classList.remove('fade-out');
  }, 200);
});

// Close dropdown
closeBtn.addEventListener('click', () => {
  dropdown.classList.remove('header__dropdown--active');

  setTimeout(() => {
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
    openBtn.style.opacity = '1'; //
    backdrop.classList.remove('backdrop--active');
    closeBtn.classList.remove('fade-out');
    dropdown.classList.add('header__dropdown--non-visible');
  }, 200);
});

dropdownNavLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // For click delay

    dropdown.classList.remove('header__dropdown--active');
    backdrop.classList.remove('backdrop--active');
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
    openBtn.style.opacity = '1';

    setTimeout(() => {
      dropdown.classList.add('header__dropdown--non-visible');
    }, 200);

    // 150ms delay
    setTimeout(() => {
      window.location.href = link.href; // Go to link
    }, 220);
  });
});
