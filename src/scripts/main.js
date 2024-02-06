// duplicate tags
const sourceContentOne = document.getElementById('work-week').innerHTML;
const duplicationContentOne = document.getElementById('duplication-work-week');

duplicationContentOne.innerHTML = sourceContentOne;

const sourceContentTwo = document.getElementById('menu').innerHTML;
const duplicateContentTwo = document.getElementById('duplication-menu');

duplicateContentTwo.innerHTML = sourceContentTwo;

// stop page
const page = document.querySelector('.page');
const locking = document.querySelector('.header__burger-menu');

locking.addEventListener('click', function() {
  page.classList.add('page__lock');
});

const unlockingClose = document.querySelector('.burger-menu__close');
const unlockingMenu = document.querySelector('.menu__list');

unlockingClose.addEventListener('click', function() {
  page.classList.remove('page__lock');
});

unlockingMenu.addEventListener('click', function() {
  page.classList.remove('page__lock');
});
