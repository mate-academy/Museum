'use strict';
const page = document.documentElement;
const iconMenu = document.querySelector('.icon--menu');
const iconClose = document.querySelector('.icon--close');

iconMenu.addEventListener('click', ()=>{
  page.style.overflow = 'hidden';
});

iconClose.addEventListener('click', ()=>{
  page.style.overflow = 'visible';
})
