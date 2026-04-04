'use strict';

function getLinesDom(selector) {
  const texts = document.querySelectorAll(selector);

  texts.forEach((text) => {
    const words = text.innerHTML.split(' ');

    text.innerHTML = words.map((word) => `<span>${word}</span>`).join(' ');

    const span = text.querySelectorAll('span');

    let lines = [[]];
    let counter = 0;
    let lastTopPosition = null;

    span.forEach((el) => {
      const rect = el.getBoundingClientRect();

      if (lastTopPosition === null) {
        lastTopPosition = rect.top;
      }

      if (Math.abs(rect.top - lastTopPosition) < 2) {
        lines[counter].push(el.innerHTML);
      } else {
        lines.push([]);
        counter++;
        lastTopPosition = rect.top;
        lines[counter].push(el.innerHTML);
      }
    });

    text.innerHTML = lines
      .map(
        (line) =>
          `<span class="text-line"><span class="text-inner">${line.join(' ')}</span></span>`,
      )
      .join(' ');
  });
}

function animateOnScrollText(selector, elementForAnimate) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const inner = entry.target.querySelector(elementForAnimate);
          inner.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: '-30% 0px',
    },
  );

  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => observer.observe(el));
}

function animateOnScrollElement(selector) {
  // element-visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('element-visible');
        }
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: '-50% 0px',
    },
  );
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => observer.observe(el));
}
animateOnScrollElement('.actuals__img-container');
getLinesDom('.spli-text-with-mask');
animateOnScrollText('.text-line', '.text-inner');
