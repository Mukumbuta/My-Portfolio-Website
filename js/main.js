const menu_bar = document.querySelector(".toolbar");

const menu = document.querySelector("desktop-navbar");

const menu_items = document.querySelector(".desktop-navbar-links");

menu_bar.addEventListener("click", () => {
    console.log("Menu Bar Clicked !!!");
    menu_bar.classList.toggle("active");
    menu_items.classList.toggle("active");
    document.documentElement.classList.toggle('scroll-disable');
});

// Close menu on menu-item click
document.querySelectorAll('.nav-links').forEach(link => link.addEventListener('click', () => {
    menu_bar.classList.remove('active');
    menu_items.classList.remove('active');
}))