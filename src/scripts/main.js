'use strict';

const burger = document.querySelector('.header__toggler');

burger.onclick = function toggleSidebar() {
  const toggler = document.querySelector('.toggler');
  const nav = document.querySelector('.nav');

  nav.classList.toggle('nav--open');
  toggler.classList.toggle('toggler--open');
};
