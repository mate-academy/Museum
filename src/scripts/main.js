'use strict';

const pictures = document.querySelectorAll('.picture--gallery');
const buttons = document.querySelectorAll('.gallery__radio');
let position = 0;

show(position);

[...buttons].forEach((button, index) => {
  button.addEventListener('click', () => {
    position = index;
    show(position);
  });
});

function show(pos) {
  [...pictures].forEach((el, i) => {
    if (i !== pos) {
      el.style.flex = '0';
      el.style.width = '0px';
    } else {
      el.style.flex = '1';
      el.style.width = '100%';
    }

    if (window.innerWidth >= '768') {
      if (i !== pos && i !== pos + 1) {
        el.style.flex = '0'; el.style.width = '0';
      } else {
        el.style.flex = '1';
        el.style.width = '100%';

        if (i === pos) {
          el.style.marginRight = '10px';
        }

        if (i === pos + 1) {
          el.style.marginLeft = '10px';
        }
      }
    }
  });
}
