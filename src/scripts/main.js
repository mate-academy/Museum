'use strict';

const menu = document.querySelector('.slider');
const toggler = document.querySelector('.nav__toggler-btn');

toggler.onclick = function toggleSidebar() {
  menu.classList.toggle('slider--open');
  toggler.classList.toggle('nav__toggler--active');
};
