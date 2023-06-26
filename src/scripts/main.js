'use strict';

window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
        document.body.classList.add('page__body--with-menu');
    } else {
        document.body.classList.remove('page__body--with-menu');
    }
});

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    document.querySelector('form').reset();

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
