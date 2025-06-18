document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".header_link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      navLinks.forEach((item) => {
        item.classList.remove("active");
      });
      this.classList.toggle("active");
    });
  });
});
