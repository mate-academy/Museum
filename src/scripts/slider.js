export default function slider() {
  const collectionSlides = document.querySelectorAll('.slider__slide');
  const slides = Array.from(collectionSlides);
  const dotContainer = document.querySelector('.slider__dots');
  let currentSlide = 0;
  const cloneFirsSlide = collectionSlides[0].cloneNode(true);

  slides.push(cloneFirsSlide);
  dotContainer.insertAdjacentElement('beforebegin', cloneFirsSlide);

  const createDots = () => {
    slides.forEach((_, i) => {
      if (i <= 3) {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class='slider__button' data-slide='${i}'></button>`,
        );
      }
    });
  };

  const activateDot = (numberSlide) => {
    const collectonDots = document.querySelectorAll('.slider__button');

    collectonDots.forEach((dot) => {
      dot.classList.remove('slider__button--active');
    });

    document
      .querySelector(`.slider__button[data-slide='${numberSlide}']`)
      .classList.add('slider__button--active');
  };

  const goToSlide = (numberSlide) => {
    slides.forEach((s, i) => {
      s.style.transform = `translate(${100 * (i - numberSlide)}%)`;
    });
  };

  slides.forEach((s, i) => {
    s.style.transform = `translate(${100 * i}%)`;
  });

  dotContainer.addEventListener('click', (e) => {
    const { slide } = e.target.dataset;

    if (!slide) {
      return;
    }

    activateDot(slide);
    goToSlide(slide);
  });

  setInterval(() => {
    goToSlide(currentSlide);
    activateDot(currentSlide);
    currentSlide = (currentSlide + 1) % 4;
  }, 1500);

  const init = () => {
    createDots();
    activateDot(0);
    goToSlide(0);
  };

  init();
}
