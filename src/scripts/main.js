'use strict';

const radioInputs = document.querySelectorAll('input[name="r"]');

const sliderBars = document.querySelectorAll('.slider__bar');

radioInputs.forEach((input, index) => {
  input.addEventListener('change', () => {
    sliderBars.forEach(bar => {
      bar.classList.remove('slider__bar--active');
    });

    sliderBars[index].classList.add('slider__bar--active');
  });
});
