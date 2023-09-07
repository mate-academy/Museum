'use strict';

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('show');
    }
  });
}

const options = { threshold: [0.2] };
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.image-animation');

for (const elm of elements) {
  observer.observe(elm);
}
