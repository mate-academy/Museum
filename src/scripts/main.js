/* eslint-disable no-undef */
'use strict';

jQuery(document).ready(function() {
  const btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('footer__scroll-to-Top');
    } else {
      btn.removeClass('footer__scroll-to-Top');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, '600');
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
