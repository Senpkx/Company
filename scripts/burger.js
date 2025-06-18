const burgerBtn = document.querySelector(".burger");
const header = document.querySelector(".header_main");
const body = document.querySelector("body");
const section = document.querySelector("main");
const footer = document.querySelector("footer");
const purple_logo = document.querySelector(".purple_logo");
const white_logo = document.querySelector(".white_logo");

burgerBtn.addEventListener("click", function () {
  this.classList.toggle("btnActive");
  header.classList.toggle("mobileHeaderActive");
  body.classList.toggle("body-no-scroll");
  section.classList.toggle("is_hidden");
  footer.classList.toggle("is_hidden");
  purple_logo.classList.toggle("is_hidden");
  white_logo.classList.toggle("is_hidden");
});
