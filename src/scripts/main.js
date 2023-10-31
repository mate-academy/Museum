'use strict';

let sidebar = document.body.querySelector('.sidebar');
let burgerIcon = document.body.querySelector('.header__burgerIcon');
let burgerIconImg = document.body.querySelector('.header__burgerIconImg');

let headerTitle = document.body.querySelector('.header__title');

document.body.addEventListener('click', (event) => {
  console.log(headerTitle);

  console.log('mouse click on ', event.target);

  if (sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
  } else if ([burgerIcon, burgerIconImg, sidebar].includes(event.target)
  && !sidebar.classList.contains('active')) {
    console.log('clicked on burger');

    sidebar.classList.toggle('active');
  }
});

([burgerIcon, burgerIconImg, sidebar].includes(event.target))
// (event.target === burgerIcon || event.target === sidebar)
