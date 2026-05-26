'use strict';

const btnOpen = document.querySelector('.header__menu-open');
const btnClose = document.querySelector('.asside__menu-close');
const asside = document.querySelector('.asside');

if (btnOpen && btnClose && asside) {
  btnOpen.addEventListener('click', () => {
    asside.classList.add('asside--opened');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  });

  btnClose.addEventListener('click', () => {
    asside.classList.remove('asside--opened');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  });
}

const wrapper = document.querySelector('.gallery__wrapper');
const dotsContainer = document.querySelector('.gallery__scroll');

if (wrapper && dotsContainer) {
  const setupPagination = () => {
    const totalItems = wrapper.children.length;

    if (totalItems === 0) return;
    dotsContainer.innerHTML = '';

    for (let i = 0; i < totalItems; i++) {
      const dot = document.createElement('span');

      dot.classList.add('gallery__scroll-dot');

      if (i === 0) dot.classList.add('gallery__scroll-dot--active');

      dot.addEventListener('click', () => {
        const itemWidth = wrapper.children[0].getBoundingClientRect().width;
        const gap = parseFloat(window.getComputedStyle(wrapper).gap) || 0;
        const scrollStep = itemWidth + gap;

        wrapper.scrollTo({
          left: scrollStep * i,
          behavior: 'smooth'
        });
      });

      dotsContainer.appendChild(dot);
    }
  };

  wrapper.addEventListener('scroll', () => {
    if (!wrapper.clientWidth || !wrapper.children.length) return;

    const itemWidth = wrapper.children[0].getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(wrapper).gap) || 0;
    const scrollStep = itemWidth + gap;

    const activeIndex = Math.round(wrapper.scrollLeft / scrollStep);
    const activeDots = dotsContainer.querySelectorAll('.gallery__scroll-dot');

    activeDots.forEach((dot, index) => {
      dot.classList.toggle('gallery__scroll-dot--active', index === activeIndex);
    });
  });

  setupPagination();
  window.addEventListener('resize', setupPagination);
}

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    asside.classList.remove('asside--opened');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  });
});
