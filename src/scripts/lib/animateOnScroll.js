const animateItems = document.querySelectorAll('.js-anim-items');

export const animateOnScroll = function(params) {
  for (let i = 0; i < animateItems.length; i++) {
    const animateItem = animateItems[i];
    const animateItemHeight = animateItem.offsetHeight;
    const animateItemOffset = setOffsetPosition(animateItem).top;
    const animateStart = 4;

    let animateItemPoint = window.innerHeight - animateItemHeight
      / animateStart;

    if (animateItemHeight > window.innerHeight) {
      animateItemPoint = window.innerHeight - window.innerHeight / animateStart;
    }

    const isScrollYInRange = window.scrollY
      > (animateItemOffset - animateItemPoint);
    const isScrollXInRange = window.scrollX
      < (animateItemOffset + animateItemHeight);
    const isContainAnimateItem = animateItem
      .classList.contains('js-anim-no-hide');

    if (isScrollYInRange && isScrollXInRange) {
      animateItem.classList.add('active');
    } else {
      if (!isContainAnimateItem) {
        animateItem.classList.remove('active');
      }
    }
  }
};

function setOffsetPosition(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const offsetPosition = {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
  };

  return offsetPosition;
}
