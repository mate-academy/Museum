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

const unlockingIcon = document.querySelector('.burger-menu__close');
const unlockingMenu = document.querySelectorAll('#menu li > a');

// functions to lock the page
function lockingPage() {
  page.classList.add('page__lock');
}

function unlockPage() {
  page.classList.remove('page__lock');
};

// event processing
locking.addEventListener('click', lockingPage);
unlockingIcon.addEventListener('click', unlockPage);

unlockingMenu.forEach(event => {
  event.addEventListener('click', unlockPage);
});
