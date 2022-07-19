const menuBar= document.querySelector('.toolbar');
const menuItems = document.querySelector('.desktop-navbar-links');

menu_bar.addEventListener('click', () => {
  menuBar.classList.toggle('active');
  menuItems.classList.toggle('active');
  document.documentElement.classList.toggle('scroll-disable');
});

// Close menu on menu-item click
document.querySelectorAll('.nav-links').forEach((link) => link.addEventListener('click', () => {
  menuBar.classList.remove('active');
  menuItems.classList.remove('active');
}));