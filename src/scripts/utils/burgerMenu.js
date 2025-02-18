export const burgerMenu = () => {
  const burgerMenu = document.getElementById('burger-menu');
  const asideMenu = document.getElementById('aside');
  const closeMenu = document.getElementById('close-menu');

  burgerMenu.addEventListener('click', () => {
    asideMenu.classList.add('menu--active');
  });

  closeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    asideMenu.classList.remove('menu--active');
  });
};
