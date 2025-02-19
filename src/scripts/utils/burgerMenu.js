export const burgerMenu = () => {
  const burgerMenu = document.getElementById('burger-menu');
  const asideMenu = document.getElementById('aside');
  const closeMenu = document.getElementById('close-menu');
  const navLinks = asideMenu.querySelectorAll('.aside__link');

  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  const openMenu = () => {
    asideMenu.classList.add('menu--active');
    overlay.classList.add('overlay--active');
    document.body.classList.add('no-scroll');
  };

  const closeMenuHandler = () => {
    asideMenu.classList.remove('menu--active');
    overlay.classList.remove('overlay--active');
    document.body.classList.remove('no-scroll');
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      closeMenuHandler();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  burgerMenu.addEventListener('click', openMenu);
  closeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenuHandler();
  });
  overlay.addEventListener('click', closeMenuHandler);
};
