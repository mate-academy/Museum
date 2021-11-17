'use strict';

const searchBtn = document.querySelectorAll('.menu__search-logo');
let openSearch = 1;

searchBtn.forEach(item => {
  return item.addEventListener('click', e => {
    const input = document.querySelector('.menu__search-input');

    openSearch += 1;

    if (openSearch % 2 === 0) {
      item.insertAdjacentHTML('afterbegin', `
        <form>
          <input
            type="text"
            class="menu__search-input"
            placeholder="search"
          >
        </form>
      `);
    } else {
      input.addEventListener('mouseleave', i => {
        input.remove();
      });
    }

    if (window.screen.width >= 1280) {
      item.style.transform = 'translateY(0)';
    } else {
      item.style.transform = 'translateY(250%)';
    }
  });
});
