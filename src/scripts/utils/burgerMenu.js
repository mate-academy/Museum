export const burgerMenu = () => {
  const burgerMenu = document.getElementById('burger-menu');
  const asideMenu = document.getElementById('aside');
  const closeMenu = document.getElementById('close-menu');

  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  const openMenu = () => {
    asideMenu.classList.add('menu--active');
    overlay.classList.add('overlay--active');
    document.body.classList.add('no-scroll');
  };

  const closeMenuHandler = (e) => {
    e.preventDefault();
    asideMenu.classList.remove('menu--active');
    overlay.classList.remove('overlay--active');
    document.body.classList.remove('no-scroll');
  };

  burgerMenu.addEventListener('click', openMenu);
  closeMenu.addEventListener('click', closeMenuHandler);
  overlay.addEventListener('click', closeMenuHandler);
};
