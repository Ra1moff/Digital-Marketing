const body = document.querySelector("body")
const navBurger = document.querySelector(".nav__burger")
const navBurgerLine = document.querySelector(".nav__burger-line")
const navMenu = document.querySelector(".nav__menu")
const newsSwiper = new Swiper(".news__swiper", {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
        spaceBetween: 30,
        breakpoints: {
            850: {
                slidesPerView: "2.6"
            },
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true
})
const carousel = new Swiper(".carousel", {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
        spaceBetween: 30,
        breakpoints: {
            850: {
                slidesPerView: "2.6"
            },
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true
})

navBurger.addEventListener("click", function () {
    body.classList.add("active")
    navBurgerLine.classList.toggle("active")
    navMenu.classList.toggle("active")
})