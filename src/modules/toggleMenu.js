const toggleMenu = () => {
  const menu = document.querySelector('.navbar-menu');
  const btnMenu = document.querySelector('.navbar__btn-menu');
  const headerLinks = document.querySelectorAll('.navbar__link');
  const footerLinks = document.querySelectorAll('.footer-menu__link');
  const dataLinks = document.querySelectorAll('[data-link]');

  const arrLinks = [...headerLinks, ...footerLinks, ...dataLinks];

  const handlerMenu = () => {
    menu.classList.toggle('navbar-menu--visible');
    btnMenu.classList.toggle('navbar__btn-menu--active');
  };

  btnMenu.addEventListener('click', handlerMenu);

  arrLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const id = event.target.getAttribute('href').substr(1);

      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

      if (event.target.matches('.navbar__link')) {
        handlerMenu();
      }
    });
  });
};

export default toggleMenu;