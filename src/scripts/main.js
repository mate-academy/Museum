'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const burgerMenuIcon = document.querySelector('.burger-button');
  const headerMenuLine = document.querySelectorAll('.menu__top-line');
  const headerMenu = document.querySelector('.menu');
  const headerMenuList = document.querySelector('.menu__list');
  const headerMenuLink = document.querySelectorAll('.menu__link');
  const headerMenuContacts = document.querySelector('.menu__contacts');
  const mainPageBody = document.querySelector('.page__body');

  burgerMenuEventListners();

  function burgerMenuEventListners() {
    burgerMenuIcon.addEventListener('click', burgerMenuIconClick);

    headerMenuLink.forEach(el =>
      el.addEventListener('click', burgerMenuItemsClick)
    );
  }

  function burgerMenuIconClick() {
    burgerMenuIcon.classList.toggle('burger-button--is-active');
    headerMenu.classList.toggle('menu--is-open');
    headerMenuList.classList.toggle('menu__list--is-visible');
    headerMenuContacts.classList.toggle('menu__contacts--is-visible');
    mainPageBody.classList.toggle('page__body--with-menu');

    headerMenuLine.forEach(el =>
      el.classList.toggle('menu__top-line--max-width')
    );
  }

  function burgerMenuItemsClick() {
    if (headerMenu.classList.contains('menu--is-open')) {
      burgerMenuIcon.click();
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const eventsTitles = document.querySelectorAll('.event__title');

  eventsTitles.forEach(function(title) {
    const innerContent = title.innerHTML.split(' ');
    const lastWord = ' <span class="event__last-word">'
      + innerContent.splice(-1).join(' ') + '</span>';

    title.innerHTML = innerContent.join(' ') + lastWord;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.event');

  cards.forEach(function(el) {
    el.addEventListener('mouseover', function(e) {
      if (e.target.classList.contains('event__image')) {
        e.target.style.transform = 'scale(1.1)';

        el.querySelector('.event__title')
          .classList.add('event__title--mouseover');
      }

      if (
        e.target.classList.contains('event__title')
        || e.target.classList.contains('event__last-word')
      ) {
        el.querySelector('.event__title')
          .classList.add('event__title--mouseover');

        el.querySelector('.event__image').style.transform = 'scale(1.1)';
      }
    });

    el.addEventListener('mouseout', function() {
      el.querySelector('.event__image').style.transform = null;

      el.querySelector('.event__title')
        .classList.remove('event__title--mouseover');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  let init = false;
  let swiper;

  function swiperGallery() {
    if (window.innerWidth < 1024) {
      if (!init) {
        init = true;

        // eslint-disable-next-line
        swiper = new Swiper('.gallery__carousel', {
          slidesPerView: 1,
          spaceBetween: 16,
          pagination: {
            el: '.gallery__pagination',
            bulletClass: 'gallery__pagination-bullet',
            bulletActiveClass: 'gallery__pagination-bullet--active',
            clickable: true,
          },

          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          },
        });
      }
    } else if (init) {
      swiper.destroy();
      init = false;
    }
  }

  swiperGallery();
  window.addEventListener('resize', swiperGallery);
});

document.addEventListener('DOMContentLoaded', function() {
  const subscribeButton = document.querySelector('#subscribeButton');
  const form = document.querySelector('.subscribe__form');

  subscribeButton.addEventListener('click', function(e) {
    e.preventDefault();

    const result = form.reportValidity();

    if (result === true) {
      form.reset();
    }
  }, false);
});
