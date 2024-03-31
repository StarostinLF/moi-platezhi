const sidebar = document.querySelector(".sidebar"),
  burgerMenu = sidebar.querySelector(".burger-menu"),
  sidebarListContainer = sidebar.querySelector(".sidebar__list-container");

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 768)
    sidebarListContainer.classList.add("sidebar__list-container_hidden");
  else sidebarListContainer.classList.remove("sidebar__list-container_hidden");
});

burgerMenu.addEventListener("click", () => {
  sidebarListContainer.classList.toggle("sidebar__list-container_hidden");
});
