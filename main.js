const closeButton = document.querySelector('#close-btn');
const menuButton = document.querySelector('header #menu-toggle');
const navMenu = document.querySelector('header nav');
const menus = document.querySelectorAll('header nav ul li');

closeButton.addEventListener('click', () => {
  navMenu.classList.remove('active');
});

menuButton.addEventListener('click', () => {
  navMenu.classList.add('active');
});

menus.forEach(menu => {
  menu.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});