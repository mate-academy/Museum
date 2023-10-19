'use strict';

const element = document.getElementById('gallery__img-block');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
let numActive = 0;

function updateButtonColors() {
  button1.style.backgroundColor = numActive === 1
    ? 'hsl(167, 55%, 23%)' : 'hsl(0, 1%, 74%)';

  button2.style.backgroundColor = numActive === 2
    ? 'hsl(167, 55%, 23%)' : 'hsl(0, 1%, 74%)';

  button3.style.backgroundColor = numActive === 3
    ? 'hsl(167, 55%, 23%)' : 'hsl(0, 1%, 74%)';

  button4.style.backgroundColor = numActive === 4
    ? 'hsl(167, 55%, 23%)' : 'hsl(0, 1%, 74%)';
}

function button1Active() {
  numActive = 1;
  element.style.transform = 'translate(0)';

  updateButtonColors();
}

function button2Active() {
  numActive = 2;
  element.style.transform = 'translate(-107%)';

  updateButtonColors();
}

function button3Active() {
  numActive = 3;
  element.style.transform = 'translate(-214%)';

  updateButtonColors();
}

function button4Active() {
  element.style.transform = 'translate(-320%)';
  numActive = 4;

  updateButtonColors();
}

button1.addEventListener('click', button1Active);

button2.addEventListener('click', button2Active);

button3.addEventListener('click', button3Active);

button4.addEventListener('click', button4Active);
