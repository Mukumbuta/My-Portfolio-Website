const menu_bar = document.querySelector(".toolbar");
const menu = document.querySelector("desktop-navbar");
const menu_items = document.querySelector(".desktop-navbar-links");
const actual_menu_items = document.querySelector(".actual-links");


menu_bar.addEventListener("click", () => {
    menu_bar.classList.toggle("active");
    menu_items.classList.toggle("active");
});
