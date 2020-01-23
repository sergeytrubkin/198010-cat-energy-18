var toggle = document.querySelector(".main-nav__button");
var mainNav = document.querySelector(".main-nav");

mainNav.classList.remove("main-nav--no-js");

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  toggle.classList.toggle("main-nav__button--close");
  mainNav.classList.toggle("main-nav--open");
})
