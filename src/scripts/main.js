'use strict';

window.onhashchange = (e) => {
  const rez = e.newURL.includes('#menu')
    ? document.body.classList.add('page--background')
    : document.body.classList.remove('page--background');

  return rez;
};
