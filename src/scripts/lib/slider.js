let windowWidth = window.innerWidth;

export const logScreenWidth = function(gallery) {
  windowWidth = window.innerWidth;

  gallery.style.transform = `translateX(0px)`;
};

export const checkDot = function(dot, dots) {
  dot.classList.add('active');

  [...dots]
    .filter(item => item !== dot)
    .forEach(item => item.classList.remove('active'));
};

export const translateGallery = function(gallery, item, i) {
  const maxXTranslate = gallery.clientWidth - windowWidth;
  const itemXTranslate = item.clientWidth + 16;

  if (windowWidth >= 768 && windowWidth < 1280) {
    gallery.style.transform = `translateX(-${(itemXTranslate * i) <= maxXTranslate
      ? itemXTranslate * i
      : maxXTranslate + 58}px)`;
  } else {
    gallery.style.transform = `translateX(-${(itemXTranslate * i) <= maxXTranslate
      ? itemXTranslate * i
      : maxXTranslate + 48}px)`;
  };
};
