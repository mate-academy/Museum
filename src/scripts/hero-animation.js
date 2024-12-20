const animateHeroContent = (selector) => {
  const heroContent = document.querySelector(selector);
  let start = null;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;

    if (elapsed < 300) {
      requestAnimationFrame(step);
    } else {
      heroContent.style.transform = 'translate(0)';
    }
  };

  requestAnimationFrame(step);
};

export default animateHeroContent;
