document.addEventListener('click', function(event) {
  if (event.target.matches('.icon--burger')) {
    document.body.style.overflow = 'hidden';
  } else if (event.target.matches('.icon--close,.menu__link')) {
    document.body.style.overflow = 'auto';
  }
});
