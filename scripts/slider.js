new Swiper(".swiper-container", {
  spaceBetween: 22,
  slidesPerView: 1,
  slidesPerGroup: 1,
  freeMode: true,
  // direction: "horizontal",

  breakpoints: {
    376: {
      slidesPerView: 2,
      spaceBetween: 22,
    },

    769: {
      slidesPerView: 3,
      spaceBetween: 22,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".cuntom-button-next",
    prevEl: ".cuntom-button-prev",
  },

  on: {
    init: function () {
      if (innerWidth <= 768) {
        this.slides[this.snapIndex + 2].style.opacity = "0";
        return;
      }
      this.slides[this.snapIndex + 3].style.opacity = "0";
    },
    slideChange: function () {
      if (innerWidth <= 768) {
        if (this.slides[this.snapIndex + 2]) {
          this.slides[this.snapIndex + 2].style.opacity = "0";
          console.log(this.snapIndex);
        }
        if (this.slides[this.snapIndex + 1]) {
          this.slides[this.snapIndex + 1].style.opacity = "1";
        }
        return;
      }

      if (this.slides[this.snapIndex + 3]) {
        this.slides[this.snapIndex + 3].style.opacity = "0";
        console.log(this.snapIndex);
      }
      this.slides[this.snapIndex + 2].style.opacity = "1";
    },
  },
});
