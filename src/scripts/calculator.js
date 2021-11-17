'use strict';

const plusValue1 = document.querySelector('.tickets__calc-button-1-plus');
const minusValue1 = document.querySelector('.tickets__calc-button-1-minus');
const input1 = document.querySelector('.tickets__calculator-input--1');

const plusValue2 = document.querySelector('.tickets__calc-button-2-plus');
const minusValue2 = document.querySelector('.tickets__calc-button-2-minus');
const input2 = document.querySelector('.tickets__calculator-input--2');

const plusValue3 = document.querySelector('.tickets__calc-button-3-plus');
const minusValue3 = document.querySelector('.tickets__calc-button-3-minus');
const input3 = document.querySelector('.tickets__calculator-input--3');

const plusValue4 = document.querySelector('.tickets__calc-button-4-plus');
const minusValue4 = document.querySelector('.tickets__calc-button-4-minus');
const input4 = document.querySelector('.tickets__calculator-input--4');

const totalNumber = document.querySelector('.tickets__calculator-total-count');

let input1Value = 0;
let input2Value = 0;
let input3Value = 0;
let input4Value = 0;
let count = 0;

plusValue1.addEventListener('click', e => {
  input1Value = input1Value + 1;
  count += 50;
  input1.innerText = `${input1Value}`;
  totalNumber.innerText = `${count} грн`;
});

minusValue1.addEventListener('click', e => {
  if (input1Value > 0) {
    input1Value = input1Value - 1;
    count -= 50;

    if (count >= 0) {
      totalNumber.innerText = `${count} грн`;
      input1.innerText = `${input1Value}`;
    }
  }
});

plusValue2.addEventListener('click', e => {
  input2Value = input2Value + 1;
  count += 30;
  input2.innerText = `${input2Value}`;
  totalNumber.innerText = `${count} грн`;
});

minusValue2.addEventListener('click', e => {
  if (input2Value > 0) {
    input2Value = input2Value - 1;
    count -= 30;
    input2.innerText = `${input2Value}`;
    totalNumber.innerText = `${count} грн`;
  }
});

plusValue3.addEventListener('click', e => {
  input3Value = input3Value + 1;
  count += 20;
  input3.innerText = `${input3Value}`;
  totalNumber.innerText = `${count} грн`;
});

minusValue3.addEventListener('click', e => {
  if (input3Value > 0) {
    input3Value = input3Value - 1;
    count -= 20;
    input3.innerText = `${input3Value}`;
    totalNumber.innerText = `${count} грн`;
  }
});

plusValue4.addEventListener('click', e => {
  input4Value = input4Value + 1;
  count += 20;
  input4.innerText = `${input4Value}`;
  totalNumber.innerText = `${count} грн`;
});

minusValue4.addEventListener('click', e => {
  if (input4Value > 0) {
    input4Value = input4Value - 1;
    count -= 20;
    input4.innerText = `${input4Value}`;
    totalNumber.innerText = `${count} грн`;
  }
});
