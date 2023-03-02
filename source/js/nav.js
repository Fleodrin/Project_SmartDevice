const navButton = document.querySelector(".main-nav__toggle");
const list = document.querySelector(".site-list");

navButton.classList.add("menu-button");
list.classList.add("site-list--hide");

navButton.onclick = function () {
  list.classList.toggle("site-list--hide");
  navButton.classList.toggle("menu-button--open");
}
