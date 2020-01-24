var toggle = document.querySelector(".page-header__button");
var mainNav = document.querySelector(".main-nav");

mainNav.classList.remove("main-nav--no-js");
toggle.classList.remove("page-header__button--no-js")

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  toggle.classList.toggle("page-header__button--close");
  mainNav.classList.toggle("main-nav--open");
})
