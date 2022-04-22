'use strict';

/* Кнопка 'вверх' появляется на экранах меньше 767px,
если страница проскролена ниже высоты хедера */
const headerHeight = document.querySelector('.header').clientHeight;

window.addEventListener('scroll', function() {
  if (window.pageYOffset > headerHeight && window.innerWidth < 767) {
    document.querySelector('.footer__buttonUp').style.display
      = 'flex';
  } else {
    document.querySelector('.footer__buttonUp').style.display
      = 'none';
  }
});

/* Бургер */
const burgerMenu = document.querySelector('.burger__menu');
const page = document.querySelector('.page');
const headerTitle = document.querySelector('.header__title');
const offLeft = headerTitle.getBoundingClientRect().left;

document.addEventListener('click', function(event) {
  const e = event.target;

  if (e.closest('.burger__icon')) {
    burgerMenu.classList.toggle('active');

    if (document.body.clientWidth >= 767) {
      document.querySelector('.burger__nav').style.paddingLeft = offLeft + 'px';
      document.querySelector('.nav').style.Left = offLeft + 'px';
    }

    page.classList.toggle('lock');
    page.classList.toggle('padding');
  }

  if (burgerMenu.classList.contains('active') && e.closest('.burger__li')) {
    burgerMenu.classList.toggle('active');
    page.classList.toggle('lock');
    page.classList.toggle('padding');
  }
});

/* Определяю ширину разделительной линии в футере в зависимости от высоты самого
высокго блока (на экаранах выше 991px) */
const footerItem1 = document.querySelector('.grid__item--1-1').clientHeight;
const footerItem2 = document.querySelector('.grid__item--3-4').clientHeight;
const footerItem3 = document.querySelector('.grid__item--5-6').clientHeight;
const footerItem4 = document.querySelector('.grid__item--7-7').clientHeight;
const footerItem5 = document.querySelector('.grid__item--8-9').clientHeight;
const footerItem6 = document.querySelector('.grid__item--10-10').clientHeight;

if (window.innerWidth > 991) {
  document.querySelector('.footer__line').style.width = Math.max(
    footerItem1, footerItem2, footerItem3, footerItem4,
    footerItem5, footerItem6) + 'px';
}
