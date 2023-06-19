'use strict';

const scrollBlock = document.querySelector('.gallery__img-block');
const pagination = document.querySelector('.pagination__block');

for (let i = 0; i < scrollBlock.children.length; i++) {
  const newBlock = document.createElement('span');

  newBlock.classList.add('pagination__btn');
  pagination.appendChild(newBlock);
}

const allPagBtn = document.querySelectorAll('.pagination__btn');

allPagBtn[0].classList.add('active');

allPagBtn.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    let allScrollLeft = 0;

    allPagBtn.forEach(item => item.classList.remove('active'));

    if (index > 0) {
      for (let i = 0; i < index; i++) {
        allScrollLeft += scrollBlock.children[i].clientWidth + 16;
      }
    }
    e.target.classList.add('active');

    scrollBlock.scrollLeft = allScrollLeft;
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
