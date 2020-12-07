'use strict';

const menu = document.querySelector('.nav__content');
const toggler = document.querySelector('.nav__toggler-btn');

toggler.onclick = function toggleSidebar() {
  menu.classList.toggle('nav__content--open');
  toggler.classList.toggle('nav__toggler--active');
};
